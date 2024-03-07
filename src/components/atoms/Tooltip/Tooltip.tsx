import React, { useState } from 'react';
import {
  autoUpdate,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';

import { cn } from '@/lib/utils/tailwind';

import { TooltipProps } from './types';

export default function Tooltip(props: TooltipProps) {
  const [open, setOpen] = useState(false);
  const { children, content, className, placement = 'right' } = props;

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: placement,
    middleware: [offset(7)],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([hover, focus, dismiss, role]);
  const childEl = React.cloneElement(children, { ref: refs.setReference });

  const { styles, isMounted } = useTransitionStyles(context, {
    duration: 200,
    initial: {
      transform: 'scale(0.8)',
      opacity: 0,
    },
    common: ({ side }) => ({
      transformOrigin: {
        top: 'center bottom',
        bottom: 'center top',
        left: 'right center',
        right: 'left center',
      }[side],
    }),
  });

  return (
    <>
      {childEl}
      <FloatingPortal>
        {isMounted && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              className={cn(
                'w-max max-w-full bg-white rounded-lg shadow-lg z-[1000] text-sm px-2 py-1.5 outline-none',
                className,
              )}
              ref={refs.setFloating}
              style={{
                ...styles,
                ...floatingStyles,
                transform: `${floatingStyles.transform} ${styles.transform}`,
              }}
              {...getFloatingProps()}
            >
              {content}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
}
