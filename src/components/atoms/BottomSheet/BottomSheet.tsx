'use client';

import { useState } from 'react';
import { BottomSheet as RsBottomSheet } from 'react-spring-bottom-sheet';

import { Button } from '../Button/Button';

export default function BottomSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <RsBottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        snapPoints={({ maxHeight }) => [maxHeight * 0.95, maxHeight / 2]}
      >
        <div className="p-10 bg-red-300 min-h-screen">
          My awesome content here
        </div>
      </RsBottomSheet>
    </>
  );
}
