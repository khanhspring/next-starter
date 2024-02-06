import { FloatingOverlay, FloatingPortal } from '@floating-ui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/utils/tailwind';

import { DrawerProps } from './types';

const variants = cva(
  'fixed z-[2000] bg-white shadow-2xl max-h-screen max-w-full',
  {
    variants: {
      placement: {
        left: 'top-0 left-0 bottom-0 border-r -translate-x-full',
        right: 'right-0 top-0 bottom-0 border-l translate-x-full',
        top: 'right-0 left-0 top-0 border-b -translate-y-full',
        bottom: 'right-0 left-0 bottom-0 border-t translate-y-full',
      },
    },
    defaultVariants: {
      placement: 'left',
    },
  },
);

const exitTransforms = {
  left: 'translate(-100%, 0)',
  right: 'translate(100%, 0)',
  top: 'translate(0, -100%)',
  bottom: 'translate(0, 100%)',
};

export default function Drawer(props: DrawerProps) {
  const { placement = 'left', children, className, open, onOpenChange } = props;

  return (
    <FloatingPortal>
      <AnimatePresence>
        {open && (
          <FloatingOverlay>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 bottom-0 right-0 bg-black/50"
              onClick={() => onOpenChange?.(false)}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transform: 'translate(0, 0)' }}
              exit={{ opacity: 0.9, transform: exitTransforms[placement] }}
              className={cn(variants({ placement }), className)}
            >
              {children}
              <button
                className="absolute w-8 h-8 flex items-center justify-center top-1 right-1 rounded-full hover:bg-gray-100 transition"
                onClick={() => onOpenChange?.(false)}
              >
                <XMarkIcon className="w-4 h-4 text-gray-700" />
              </button>
            </motion.div>
          </FloatingOverlay>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
}
