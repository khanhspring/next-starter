import { ReactNode } from 'react';

import { cn } from '@/lib/utils/tailwind';

type Props = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  title: string;
  active?: boolean;
};

export default function MenuItem(props: Props) {
  const { prefix, suffix, title, active } = props;
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-5 py-1.5 hover:bg-gray-200/80 cursor-pointer transition',
        active && 'bg-gray-200/80 border-r-2 border-r-rose-600/80',
      )}
    >
      {prefix && (
        <div className="text-slate-500 flex items-center justify-center">
          {prefix}
        </div>
      )}
      <span className="flex-1 flex items-center text-sm opacity-85">
        {title}
      </span>
      {suffix}
    </div>
  );
}
