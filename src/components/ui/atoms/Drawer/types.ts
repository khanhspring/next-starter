import { ReactNode } from 'react';

export type DrawerProps = {
  children?: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
};
