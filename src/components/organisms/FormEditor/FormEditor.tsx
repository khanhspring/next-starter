'use client';

import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import Placeholder from '@tiptap/extension-placeholder';
import FormattingMenu from './components/FormattingMenu';
import Image from './components/Image';
import SlashCommand from './components/SlashCommand';
import { DBlock } from './components/dBlock';
import { Document } from './doc';

const FormEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      DBlock,
      StarterKit.configure({
        document: false,
        dropcursor: {
          width: 2,
          class: 'notitap-dropcursor',
          color: 'skyblue',
        },
      }),
      Underline,
      BulletList,
      OrderedList,
      ListItem,
      SlashCommand,
      Image,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'What’s the title?';
          }
          return 'Can you add some further context?';
        },
      }),
      DBlock,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-md mx-auto max-w-full focus:outline-none',
      },
    },
  });

  return (
    <>
      <FormattingMenu editor={editor} />
      <EditorContent editor={editor} className="form-editor" />
    </>
  );
};

export default FormEditor;
