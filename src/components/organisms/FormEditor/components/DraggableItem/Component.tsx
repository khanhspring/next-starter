import { Bars3Icon } from '@heroicons/react/24/outline';
import { NodeViewWrapper } from '@tiptap/react';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function Component({ children }: Props) {
  return (
    <NodeViewWrapper>
      <div
        className="drag-handle"
        contentEditable={false}
        draggable="true"
        data-drag-handle
      >
        <Bars3Icon className="w-7 h-7" />
      </div>
      {children}
    </NodeViewWrapper>
  );
}
