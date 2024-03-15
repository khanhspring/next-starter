import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { Input } from '@/components/atoms/Input/Input';

export default function Header() {
  return (
    <header className="h-header fixed left-sidebar top-0 right-0 bg-white/50 backdrop-blur z-10 flex items-center px-8 justify-center">
      <div className="max-w-[400px] w-full">
        <Input
          radius="full"
          size="sm"
          placeholder="Search..."
          prefix={<MagnifyingGlassIcon className="w-4 h-4 opacity-40" />}
          allowClear
        />
      </div>
    </header>
  );
}
