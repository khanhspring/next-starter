import { ReactNode } from 'react';

export type Placement = 'top' | 'bottom' | 'left' | 'right';

export type DrawerProps = {
  children?: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  placement?: Placement;
};
