import { useLayoutEffect } from 'react';
import {
  autoUpdate,
  FloatingFocusManager,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';

import { cn } from '@/lib/utils/tailwind';

import { PopoverProps } from './types';

export default function Popover(props: PopoverProps) {
  const {
    children,
    className,
    anchorRef,
    open,
    onOpenChange,
    placement = 'right',
  } = props;

  const { refs, floatingStyles, context } = useFloating({
    open: open,
    onOpenChange: onOpenChange,
    placement: placement,
    middleware: [offset(7)],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([click, dismiss, role]);

  useLayoutEffect(() => {
    refs.setReference(anchorRef.current);
  }, [anchorRef, refs]);

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
      {isMounted && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={cn(
              'w-max max-w-full bg-white rounded-xl shadow-xl border z-[1000]',
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
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
