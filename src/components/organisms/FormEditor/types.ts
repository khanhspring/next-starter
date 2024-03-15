import { Editor, Range } from '@tiptap/core';

export interface SlashCommandOptions {
  editor: Editor;
  range: Range;
}

export interface SlashCommandItem {
  title: string;
  command: (props: SlashCommandOptions) => void;
}
