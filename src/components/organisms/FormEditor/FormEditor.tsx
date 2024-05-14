'use client';
import {
  BlockNoteSchema,
  defaultBlockSpecs,
  filterSuggestionItems,
  insertOrUpdateBlock,
} from '@blocknote/core';
import {
  BlockNoteView,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from '@blocknote/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import { Alert } from './Alert';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';

const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the Alert block.
    alert: Alert,
  },
});

const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
  title: 'Alert',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'alert',
    });
  },
  aliases: [
    'alert',
    'notification',
    'emphasize',
    'warning',
    'error',
    'info',
    'success',
  ],
  group: 'Other',
  icon: <InformationCircleIcon className="w-5 h-5" />,
});

const FormEditor = () => {
  const editor = useCreateBlockNote({
    schema,
  });
  return (
    <BlockNoteView editor={editor} theme="light" slashMenu={false}>
      <SuggestionMenuController
        triggerCharacter={'/'}
        getItems={async (query) =>
          // Gets all default slash menu items and `insertAlert` item.
          filterSuggestionItems(
            [...getDefaultReactSlashMenuItems(editor), insertAlert(editor)],
            query,
          )
        }
      />
    </BlockNoteView>
  );
};

export default FormEditor;
