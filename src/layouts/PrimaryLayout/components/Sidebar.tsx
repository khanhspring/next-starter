'use client';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import SimpleBar from 'simplebar-react';

import Tooltip from '@/components/atoms/Tooltip/Tooltip';
import { SidebarIcon } from '@/components/icons';
import { Avatar } from '@/components/molecules/Avatar';
import Logo from '@/components/molecules/Logo';

import DashboardMenu from './Menu/DashboardMenu';
import FolderMenu from './Menu/FolderMenu';
import RecentMenu from './Menu/RecentMenu';

export default function Sidebar() {
  return (
    <aside className="fixed flex flex-col left-0 top-0 bottom-0 w-sidebar bg-white border-r border-gray-200/50">
      <div className="h-header flex justify-between items-center pl-5 pr-3">
        <Logo />
        <button className="w-7 h-7 flex items-center justify-center rounded-full transition hover:bg-gray-200">
          <SidebarIcon className="w-4 h-4" />
        </button>
      </div>
      <nav className="flex-1 overflow-hidden">
        <SimpleBar className="h-full">
          <div className="w-full flex flex-col gap-2">
            <DashboardMenu />
            <RecentMenu />
            <FolderMenu />
          </div>
        </SimpleBar>
      </nav>
      <div className="h-header flex justify-between items-center px-3 border-t border-t-gray-100/80">
        <Tooltip content="Settings">
          <button className="w-7 h-7 flex items-center justify-center rounded-full transition hover:bg-gray-200">
            <Cog6ToothIcon className="w-5 h-5" />
          </button>
        </Tooltip>
        <Tooltip content="Profile">
          <Avatar name="Hello" />
        </Tooltip>
      </div>
    </aside>
  );
}
