import { FloatingOverlay, FloatingPortal } from '@floating-ui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/utils/tailwind';

import { DrawerProps } from './types';

export default function Drawer(props: DrawerProps) {
  const { children, className, open, onOpenChange } = props;

  return (
    <FloatingPortal>
      <AnimatePresence>
        {open && (
          <FloatingOverlay lockScroll>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 bottom-0 right-0 bg-black/50"
              onClick={() => onOpenChange?.(false)}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transform: 'translateX(0)' }}
              exit={{ opacity: 0.8, transform: 'translateX(-100%)' }}
              className={cn(
                'fixed top-0 left-0 h-screen z-[1000] -translate-x-full bg-white shadow-2xl border-r',
                className,
              )}
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
