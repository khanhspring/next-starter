import { ReactNode, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  title: string;
  defaultOpen?: boolean;
  children?: ReactNode;
  suffix?: ReactNode;
};

export default function MenuSection(props: Props) {
  const { title, defaultOpen, suffix, children } = props;
  const [open, setOpen] = useState(defaultOpen || false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between gap-2 px-5 h-8 hover:bg-gray-200/80 cursor-pointer transition select-none"
        onClick={toggle}
        aria-hidden
      >
        <div className="flex-1 flex items-center gap-1">
          <span className="flex items-center text-xs opacity-65 leading-5">
            {title}
          </span>
          <AnimatePresence>
            <motion.span
              initial={false}
              animate={{ transform: open ? 'rotate(0)' : 'rotate(-180deg)' }}
            >
              <ChevronDownIcon className="w-3 h-3" />
            </motion.span>
          </AnimatePresence>
        </div>
        {suffix}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="w-full overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
