import { ReactNode } from 'react';

export type DialogProps = {
  children?: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
};
