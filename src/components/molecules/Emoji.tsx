import { cn } from '@/lib/utils/tailwind';

type Props = {
  children: string;
  className?: string;
};

export default function Emoji({ children, className }: Props) {
  return <span className={cn(className)}>{children}</span>;
}
