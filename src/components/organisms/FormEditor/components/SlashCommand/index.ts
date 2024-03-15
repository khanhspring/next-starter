import { Editor } from '@tiptap/core';
import { ReactRenderer } from '@tiptap/react';
import {
  SuggestionKeyDownProps,
  SuggestionOptions,
  SuggestionProps,
} from '@tiptap/suggestion';
import tippy, {
  GetReferenceClientRect,
  Instance,
  Props as TippyProps,
} from 'tippy.js';

import { SlashCommandItem, SlashCommandOptions } from '../../types';

import Command from './command';
import SlashMenu, { SlashMenuHandler } from './SlashMenu';

type Props = SuggestionProps<SlashCommandItem>;
type Options = SuggestionOptions<SlashCommandItem>;

const render: Options['render'] = () => {
  let component: ReactRenderer<SlashMenuHandler>;
  let popup: Instance<TippyProps>[];

  return {
    onStart: (props: Props) => {
      component = new ReactRenderer(SlashMenu, {
        props,
        editor: props.editor,
      });

      const clientRect: GetReferenceClientRect = () => {
        return props.clientRect?.() as DOMRect;
      };

      popup = tippy('body', {
        getReferenceClientRect: clientRect,
        appendTo: () => document.body,
        content: component.element,
        showOnCreate: true,
        interactive: true,
        trigger: 'manual',
        placement: 'bottom-start',
      });
    },
    onUpdate(props: Props) {
      component.updateProps(props);

      const clientRect: GetReferenceClientRect = () => {
        return props.clientRect?.() as DOMRect;
      };

      popup[0].setProps({
        getReferenceClientRect: clientRect,
      });
    },
    onKeyDown(props: SuggestionKeyDownProps): boolean {
      component.updateProps(props);
      component?.ref?.onKeyDown(props.event);

      if (props.event.key === 'Escape') {
        popup[0].hide();

        return true;
      }

      if (props.event.key === 'Enter') {
        props.event.stopPropagation();
        props.event.preventDefault();

        return true;
      }

      return false;
    },
    onExit() {
      if (popup && popup[0]) popup[0]?.destroy();
      if (component) component.destroy();
    },
  };
};

type ItemsOptions = { query: string; editor: Editor };
const items: Options['items'] = ({ query }: ItemsOptions) => {
  return [
    {
      title: 'H1',
      command: ({ editor, range }: SlashCommandOptions) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode('heading', { level: 1 })
          .run();
      },
    },
    {
      title: 'H2',
      command: ({ editor, range }: SlashCommandOptions) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode('heading', { level: 2 })
          .run();
      },
    },
    {
      title: 'bold',
      command: ({ editor, range }: SlashCommandOptions) => {
        editor.chain().focus().deleteRange(range).setMark('bold').run();
      },
    },
    {
      title: 'italic',
      command: ({ editor, range }: SlashCommandOptions) => {
        editor.chain().focus().deleteRange(range).setMark('italic').run();
      },
    },
    {
      title: 'image',
      command: ({ editor, range }: SlashCommandOptions) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setImage({ src: 'https://source.unsplash.com/8xznAGy4HcY/800x400' })
          .run();
      },
    },
  ]
    .filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
    .slice(0, 10);
};

const SlashCommand = Command.configure({
  suggestion: {
    render,
    items,
  },
});
export default SlashCommand;
