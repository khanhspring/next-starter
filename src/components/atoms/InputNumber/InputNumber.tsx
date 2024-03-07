'use client';

import { forwardRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import { cva, type VariantProps } from 'class-variance-authority';

import { isInRange, isNumeric, toString } from '@/lib/utils/object';
import { cn } from '@/lib/utils/tailwind';

import { InputNumberProps } from './types';

export type Ref = HTMLInputElement;

const variants = cva(
  'bg-gray-100 flex items-center gap-1 w-full relative overflow-hidden',
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        sm: 'h-8 pl-3 text-sm',
        md: 'h-10 pl-3 text-base',
        lg: 'h-12 pl-4 text-lg',
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
  },
);

type Props = InputNumberProps & VariantProps<typeof variants>;

export const InputNumber = forwardRef<Ref, Props>((props, ref) => {
  const {
    variant,
    size,
    radius,
    className,
    disabled,
    prefix,
    suffix,
    value,
    onChange,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    step = 1,
    ...rest
  } = props;

  const initValue = isNumeric(value) ? toString(value) : '';
  const [inputValue, setInputValue] = useState(initValue);
  const [currentValue, setCurrentValue] = useState(initValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    if (isNumeric(val) && isInRange(+val, min, max)) {
      onChange?.(val);
      setCurrentValue(val);
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isNumeric(val) || !isInRange(+val, min, max)) {
      setInputValue(currentValue);
    }
  };

  const increase = () => {
    if (inputValue === undefined || inputValue === null) {
      setInputValue(step + '');
      setCurrentValue(step + '');
      return;
    }
    if (+inputValue >= max) {
      return;
    }
    const newValue = +inputValue + step;
    setInputValue(toString(newValue));
    setCurrentValue(toString(newValue));
  };

  const decrease = () => {
    if (inputValue === undefined || inputValue === null) {
      setInputValue(-step + '');
      setCurrentValue(-step + '');
      return;
    }
    if (+inputValue <= min) {
      return;
    }
    const newValue = +inputValue - step;
    setInputValue(toString(newValue));
    setCurrentValue(toString(newValue));
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
        onBlur={handleOnBlur}
        {...rest}
      />
      {suffix}
      <div className="flex flex-col h-full justify-between">
        <span
          className="flex items-center justify-center h-1/2 px-1 border-l hover:bg-gray-200 cursor-pointer active:opacity-90"
          onClick={increase}
          role="button"
          aria-hidden
        >
          <ChevronUpIcon className="w-4 h-4" />
        </span>
        <span
          className="flex items-center justify-center h-1/2 px-1 border-l border-t hover:bg-gray-200 cursor-pointer active:opacity-90"
          onClick={decrease}
          role="button"
          aria-hidden
        >
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
});

InputNumber.displayName = 'InputNumber';
