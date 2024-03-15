import React, { useEffect, useImperativeHandle, useState } from 'react';

import { SlashCommandItem } from '../../types';

export type SlashMenuHandler = {
  onKeyDown: (event: KeyboardEvent) => void;
};

type Props = {
  items: SlashCommandItem[];
  command: (item: SlashCommandItem) => void;
};

const SlashMenu = React.forwardRef<SlashMenuHandler, Props>((props, ref) => {
  const { items, command } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  const upHandler = () => {
    setSelectedIndex((selectedIndex + items.length - 1) % items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const selectItem = (index: number) => {
    const item = items[index];

    if (item) setTimeout(() => command(item));
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      event.stopPropagation();
      event.preventDefault();
      upHandler();
      return true;
    }

    if (event.key === 'ArrowDown') {
      event.stopPropagation();
      event.preventDefault();
      downHandler();
      return true;
    }

    if (event.key === 'Enter') {
      event.stopPropagation();
      event.preventDefault();
      enterHandler();
      return true;
    }

    return false;
  };

  useImperativeHandle(ref, () => ({
    onKeyDown,
  }));

  return (
    <div className="flex flex-col px-5 py-3 shadow rounded w-[315px] bg-white">
      {items.map((item, index) => {
        return (
          <button
            className={`item ${index === selectedIndex ? 'font-bold' : ''}`}
            key={index}
            onClick={() => selectItem(index)}
            onKeyDown={(e) => e.code === 'Enter' && selectItem(index)}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
});

SlashMenu.displayName = 'SlashMenu';
export default SlashMenu;
