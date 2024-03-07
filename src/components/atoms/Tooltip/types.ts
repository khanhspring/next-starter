import { ReactElement, ReactNode } from 'react';
import { Placement } from '@floating-ui/react';

export type TooltipProps = {
  children: ReactElement;
  className?: string;
  placement?: Placement;
  content: ReactNode;
};
