'use client';

import RcSelect, { Option } from 'rc-select';

import { VariantProps, cva } from 'class-variance-authority';
import { XCircleIcon } from '@heroicons/react/16/solid';
import { cn } from '@/lib/utils/tailwind';
import { CheckIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

const variants = cva('bg-gray-100 flex items-center gap-1 w-full', {
  variants: {
    variant: {
      default: '',
    },
    size: {
      sm: 'min-h-[32px] text-sm',
      md: 'min-h-[40px] text-base',
      lg: 'min-h-[48px] text-lg',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    radius: 'md',
  },
});

const clearVariants = cva(
  'flex items-center justify-center rounded-full cursor-pointer bg-gray-100',
  {
    variants: {
      size: {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type Props = VariantProps<typeof variants>;

export default function Select(props: Props) {
  const { variant, size = 'md', radius } = props;

  return (
    <RcSelect
      className={cn(variants({ variant, size, radius }), `select-size-${size}`)}
      allowClear={{
        clearIcon: (
          <span className={cn(clearVariants({ size }))} aria-hidden="true">
            <XCircleIcon className="w-full h-full text-gray-400 active:opacity-90" />
          </span>
        ),
      }}
      menuItemSelectedIcon={<CheckIcon className="w-4 h-4" />}
      removeIcon={<XMarkIcon className="w-4 h-4 opacity-50 cursor-pointer" />}
      suffixIcon={<ChevronDownIcon className="w-3.5 h-3.5" />}
      placeholder="Hello"
    >
      {[...Array(10)].map((item, index) => (
        <>
          <Option value={`jack ${index}`}>jack {index}</Option>
          <Option value={`lucy ${index}`}>lucy {index}</Option>
          <Option value={`yiminghe ${index}`}>yiminghe {index}</Option>
        </>
      ))}
    </RcSelect>
  );
}
