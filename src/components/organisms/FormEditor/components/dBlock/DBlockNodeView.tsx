/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useMemo } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from '@tiptap/react';

export const DBlockNodeView: React.FC<NodeViewProps> = ({
  node,
  getPos,
  editor,
}) => {
  const isTable = useMemo(() => {
    const { content } = node.content as any;

    return content[0].type.name === 'table';
  }, [node.content]);

  const createNodeAfter = () => {
    const pos = getPos() + node.nodeSize;

    editor.commands.insertContentAt(pos, {
      type: 'dBlock',
      content: [
        {
          type: 'paragraph',
        },
      ],
    });
  };

  return (
    <NodeViewWrapper as="div" className="flex gap-2 group w-full relative">
      <section
        className="flex mt-2 pt-[2px] gap-1"
        aria-label="left-menu"
        contentEditable="false"
      >
        <button
          type="button"
          className="d-block-button group-hover:opacity-100"
          onClick={createNodeAfter}
        >
          <PlusCircleIcon className="w-6 h-6" />
        </button>
        <div
          className="d-block-button group-hover:opacity-100"
          contentEditable={false}
          draggable
          data-drag-handle
        >
          <PlusCircleIcon className="w-6 h-6" />
        </div>
      </section>

      <NodeViewContent
        className={`node-view-content w-full ${isTable ? 'ml-6' : ''}`}
      />
    </NodeViewWrapper>
  );
};