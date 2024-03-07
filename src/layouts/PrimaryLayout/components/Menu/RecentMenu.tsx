import Emoji from '@/components/molecules/Emoji';

import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

export default function RecentMenu() {
  return (
    <MenuSection title="Recent">
      <MenuItem
        prefix={<Emoji className="text-sm">🗒️</Emoji>}
        title="Thành lập doanh nghiệp"
      />
      <MenuItem
        prefix={<Emoji className="text-sm">🗒️</Emoji>}
        title="Hồ sơ tách sổ đỏ"
      />
      <MenuItem
        prefix={<Emoji className="text-sm">🗒️</Emoji>}
        title="Hồ sơ GPLX hạng A1"
        active
      />
    </MenuSection>
  );
}
