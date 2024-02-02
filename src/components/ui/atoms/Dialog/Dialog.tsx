import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils/tailwind';

import { DialogProps } from './types';

export default function Dialog(props: DialogProps) {
  const { children, className, open, onOpenChange } = props;

  const { refs, context } = useFloating({
    open: open,
    onOpenChange: onOpenChange,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });

  const { styles: overlayStyles, isMounted } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
    },
  });

  const { styles: bodyStyles } = useTransitionStyles(context, {
    duration: 150,
    initial: {
      transform: 'scale(1.05)',
      opacity: 0.5,
    },
    close: {
      transform: 'scale(1.05)',
      opacity: 0.1,
    },
  });

  const { getFloatingProps } = useInteractions([click, role, dismiss]);

  return (
    <FloatingPortal>
      {isMounted && (
        <FloatingOverlay
          className="grid place-items-center bg-black/50 transition"
          lockScroll
          style={{ ...overlayStyles }}
        >
          <FloatingFocusManager context={context}>
            <div
              className={cn(
                'bg-white rounded-xl shadow-2xl border relative',
                className,
              )}
              ref={refs.setFloating}
              {...getFloatingProps()}
              style={{ ...bodyStyles }}
            >
              {children}
              <button
                className="absolute w-8 h-8 flex items-center justify-center top-1 right-1 rounded-full hover:bg-gray-100 transition"
                onClick={() => onOpenChange?.(false)}
              >
                <XMarkIcon className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </FloatingPortal>
  );
}
