import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
