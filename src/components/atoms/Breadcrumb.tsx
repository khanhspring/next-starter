import Link from 'next/link';
import React from 'react';

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <div className="flex items-center gap-1 opacity-65 text-xs">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link href={item.href}>{item.title}</Link>
          {index < items.length - 1 && <span>-</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
