import { BubbleMenu, Editor } from '@tiptap/react';

import { BoldIcon, ItalicIcon, UnderlineIcon } from '@/components/icons';
import { cn } from '@/lib/utils/tailwind';

type Props = {
  editor?: Editor | null;
};

export default function FormattingMenu({ editor }: Props) {
  if (!editor) return null;

  const position = editor.state.selection.from;
  const node = editor.state.doc.nodeAt(position);

  if (!node || node?.type?.name !== 'text') {
    return null;
  }

  return (
    <BubbleMenu
      className="bubble-menu flex items-center gap-1 bg-gray-200 shadow px-1 py-1 rounded-full"
      tippyOptions={{ duration: 100 }}
      editor={editor}
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(
          editor.isActive('bold') && 'bg-gray-300',
          'h-6 w-6 flex items-center justify-center rounded-full',
        )}
      >
        <BoldIcon className="w-3.5 h-3.5 opacity-90" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(
          editor.isActive('italic') && 'bg-gray-300',
          'h-6 w-6 flex items-center justify-center rounded-full',
        )}
      >
        <ItalicIcon className="w-4 h-4 opacity-90" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={cn(
          editor.isActive('underline') && 'bg-gray-300',
          'h-6 w-6 flex items-center justify-center rounded-full',
        )}
      >
        <UnderlineIcon className="w-3.5 h-3.5 opacity-90" />
      </button>
    </BubbleMenu>
  );
}
