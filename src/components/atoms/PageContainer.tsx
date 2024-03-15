import { PropsWithChildren } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils/tailwind';

const variants = cva('flex flex-col gap-5 py-5 mx-auto', {
  variants: {
    size: {
      fullWidth: 'w-full',
      default: 'max-w-[1320px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type Props = PropsWithChildren & {
  fullWidth?: boolean;
  className?: string;
};

export default function PageContainer({
  fullWidth,
  className,
  children,
}: Props) {
  return (
    <div
      className={cn(
        variants({ size: fullWidth ? 'fullWidth' : 'default', className }),
      )}
    >
      {children}
    </div>
  );
}
