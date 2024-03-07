import { BellAlertIcon, HomeIcon, StarIcon } from '@heroicons/react/24/outline';

import MenuItem from './MenuItem';

export default function DashboardMenu() {
  return (
    <div className="w-full">
      <MenuItem prefix={<HomeIcon className="w-4 h-4" />} title="Dashboard" />
      <MenuItem prefix={<StarIcon className="w-4 h-4" />} title="Stared" />
      <MenuItem
        prefix={<BellAlertIcon className="w-4 h-4" />}
        title="Notifications"
      />
    </div>
  );
}
