import { FolderIcon, PlusIcon } from '@heroicons/react/24/outline';

import MenuItem from './MenuItem';
import MenuSection from './MenuSection';
import Tooltip from '@/components/atoms/Tooltip/Tooltip';
import { MouseEvent } from 'react';

export default function FolderMenu() {
  const onNewFolderClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <MenuSection
      title="Folders"
      defaultOpen
      suffix={
        <div className="flex items-center gap-1">
          <Tooltip content="New folder">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full transition hover:bg-gray-300"
              onClick={onNewFolderClick}
            >
              <PlusIcon className="w-3.5 h-3.5" />
            </button>
          </Tooltip>
        </div>
      }
    >
      <MenuItem
        prefix={<FolderIcon className="w-3.5 h-3.5" />}
        title="Luật doanh nghiệp"
      />
      <MenuItem
        prefix={<FolderIcon className="w-3.5 h-3.5" />}
        title="Luật dân sự"
      />
      <MenuItem
        prefix={<FolderIcon className="w-3.5 h-3.5" />}
        title="Luật đất đai"
        active
      />
      <MenuItem
        prefix={<FolderIcon className="w-3.5 h-3.5" />}
        title="Bảo hiểm xã hội"
      />
      <MenuItem
        prefix={<FolderIcon className="w-3.5 h-3.5" />}
        title="Ngân hàng"
      />
      <MenuItem
        prefix={<FolderIcon className="w-3.5 h-3.5" />}
        title="Thuế doanh nghiệp"
      />
    </MenuSection>
  );
}
