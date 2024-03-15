import { Editor, Extension, Range } from '@tiptap/core';
import Suggestion, { SuggestionOptions } from '@tiptap/suggestion';

import { SlashCommandItem } from '../../types';

type Props = Omit<SuggestionOptions<SlashCommandItem>, 'editor'>;

type CommandProps = {
  editor: Editor;
  range: Range;
  props: SlashCommandItem;
};

type Options = {
  suggestion: Props;
};

const Command = Extension.create<Options>({
  name: 'command',

  addOptions() {
    return {
      suggestion: {
        char: '/',
        command: ({ editor, range, props }: CommandProps) => {
          props.command({ editor, range });
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        ...this.options.suggestion,
        editor: this.editor,
      }),
    ];
  },
});

export default Command;
