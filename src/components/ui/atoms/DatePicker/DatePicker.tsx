'use client';

import { XCircleIcon } from '@heroicons/react/16/solid';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { cva, VariantProps } from 'class-variance-authority';
import { Moment } from 'moment';
import Picker from 'rc-picker';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import enUS from 'rc-picker/es/locale/en_US';

import { cn } from '@/lib/utils/tailwind';

const variants = cva('bg-gray-100 flex items-center gap-1 w-full', {
  variants: {
    variant: {
      default: '',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-3 text-base',
      lg: 'h-12 px-4 text-lg',
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
  'flex items-center justify-center rounded-full cursor-pointer',
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

export default function DatePicker(props: Props) {
  const { variant, size, radius } = props;

  return (
    <Picker<Moment>
      generateConfig={momentGenerateConfig}
      locale={enUS}
      superPrevIcon={<ChevronDoubleLeftIcon className="w-4 h-4" />}
      superNextIcon={<ChevronDoubleRightIcon className="w-4 h-4" />}
      prevIcon={<ChevronLeftIcon className="w-4 h-4" />}
      nextIcon={<ChevronRightIcon className="w-4 h-4" />}
      className={cn(variants({ variant, size, radius }))}
      allowClear={{
        clearIcon: (
          <span className={cn(clearVariants({ size }))} aria-hidden="true">
            <XCircleIcon className="w-full h-full text-gray-400 active:opacity-90" />
          </span>
        ),
      }}
      transitionName="rc-picker-scale"
    />
  );
}
