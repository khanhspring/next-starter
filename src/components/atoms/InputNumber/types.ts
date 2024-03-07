import { InputHTMLAttributes } from 'react';

export type InputNumberProps = {
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: number;
  onChange?: (value?: string | number | null) => void;
  min?: number;
  max?: number;
  step?: number;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'value' | 'prefix' | 'onChange' | 'max' | 'min'
>;
