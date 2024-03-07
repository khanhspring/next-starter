import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/tailwind';

import { UserIcon } from '../icons';

import { Sacramento } from 'next/font/google';

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
});

export type Ref = HTMLDivElement;

const variants = cva(
  'rounded-full flex items-center justify-center ring-1 ring-offset-2 ring-gray-300/90 hover:ring-blue-400 bg-rose-400 text-white transition cursor-pointer',
  {
    variants: {
      size: {
        sm: 'w-4 h-4 text-sm',
        md: 'w-6 h-6 text-base',
        lg: 'w-8 h-8 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type Props = {
  name?: string;
  className?: string;
} & VariantProps<typeof variants>;

export const Avatar = forwardRef<Ref, Props>((props, ref) => {
  const { name, size, className } = props;
  const firstLetter = name?.substring(0, 1);
  return (
    <div className={cn(variants({ size, className }))} ref={ref}>
      {firstLetter && (
        <span className={sacramento.className}>
          {firstLetter.toLocaleLowerCase()}
        </span>
      )}
      {!firstLetter && <UserIcon className="w-full h-full fill-white" />}
    </div>
  );
});
Avatar.displayName = 'Avatar';
