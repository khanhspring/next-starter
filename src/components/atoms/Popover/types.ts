import { ReactNode, RefObject } from 'react';
import { Placement } from '@floating-ui/react';

export type PopoverProps = {
  children?: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  anchorRef: RefObject<HTMLElement>;
  placement?: Placement;
};
