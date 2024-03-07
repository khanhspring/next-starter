import { InputHTMLAttributes } from 'react';

export type InputProps = {
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  value?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'prefix'>;
