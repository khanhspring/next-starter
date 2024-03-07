'use client';

import { forwardRef, useState } from 'react';
import { XCircleIcon } from '@heroicons/react/16/solid';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/tailwind';

import { InputProps } from './types';

export type Ref = HTMLInputElement;

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

type Props = InputProps & VariantProps<typeof variants>;

export const Input = forwardRef<Ref, Props>((props, ref) => {
  const {
    variant,
    size,
    radius,
    className,
    disabled,
    prefix,
    suffix,
    allowClear,
    value,
    onChange,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState(value);

  const handleClear = () => {
    setInputValue('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className={cn(variants({ variant, size, radius, className }))}>
      {prefix}
      <input
        ref={ref}
        disabled={disabled}
        className="outline-none bg-transparent flex-1"
        value={inputValue}
        onChange={handleOnChange}
        {...rest}
      />
      {allowClear && inputValue && (
        <span
          className={cn(clearVariants({ size }))}
          onClick={handleClear}
          aria-hidden="true"
        >
          <XCircleIcon className="w-full h-full text-gray-400 active:opacity-90" />
        </span>
      )}
      {suffix}
    </div>
  );
});

Input.displayName = 'Input';
