'use client';

import { forwardRef, MouseEvent } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/tailwind';

import Ripple from '../Ripple/Ripple';
import { useRipple } from '../Ripple/useRipple';
import { Spinner } from '../Spinner/Spinner';

import { ButtonProps } from './types';
export type Ref = HTMLButtonElement;

const variants = cva(
  'overflow-hidden relative inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 select-none transition',
  {
    variants: {
      variant: {
        default: 'shadow',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-8 text-lg',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded',
        md: 'rounded-lg',
        lg: 'rounded-xl',
        full: 'rounded-full',
      },
      color: {
        primary: 'bg-blue-500 text-white hover:bg-blue-500/90',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'md',
      color: 'primary',
    },
  },
);

type Props = ButtonProps & VariantProps<typeof variants>;

export const Button = forwardRef<Ref, Props>((props, ref) => {
  const {
    children,
    onClick,
    variant,
    size,
    radius,
    color,
    className,
    loading,
    disabled,
    ...rest
  } = props;

  const {
    onClick: onRippleClick,
    onClear: onClearRipple,
    ripples,
  } = useRipple();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onRippleClick(event);
    onClick?.(event);
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(variants({ variant, size, radius, color, className }))}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <Spinner />}
      {children}
      <Ripple onClear={onClearRipple} ripples={ripples} />
    </button>
  );
});

Button.displayName = 'Button';
