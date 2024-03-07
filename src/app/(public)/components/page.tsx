'use client';
import { useRef, useState } from 'react';

import BottomSheet from '@/components/atoms/BottomSheet/BottomSheet';
import { Button } from '@/components/atoms/Button/Button';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import DatePicker from '@/components/atoms/DatePicker/DatePicker';
import Dialog from '@/components/atoms/Dialog/Dialog';
import Drawer from '@/components/atoms/Drawer/Drawer';
import { Input } from '@/components/atoms/Input/Input';
import { InputNumber } from '@/components/atoms/InputNumber/InputNumber';
import Popover from '@/components/atoms/Popover/Popover';
import RadioGroup from '@/components/atoms/RadioGroup/RadioGroup';
import Select from '@/components/atoms/Select/Select';
import Tooltip from '@/components/atoms/Tooltip/Tooltip';

import Switch from '../../../components/atoms/Switch/Switch';

export default function Components() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col gap-5 min-h-screen p-10 items-start w-full max-w-[500px]">
      <div className="flex flex-wrap gap-5 items-center">
        <Button>Hello</Button>
        <Button loading>Loading...</Button>
        <Button radius="full">Radius full</Button>
        <Button size="sm">Size sm</Button>
        <Button size="lg">Size lg</Button>
      </div>
      <div className="flex flex-col gap-5 justify-center w-full max-w-[500px]">
        <Input
          placeholder="Hello world..."
          maxLength={10}
          allowClear
          size="sm"
        />
        <Input placeholder="Hello world..." maxLength={10} allowClear />
        <Input
          placeholder="Hello world..."
          maxLength={10}
          allowClear
          size="lg"
        />
        <Input
          placeholder="example.com"
          prefix={<span>https://</span>}
          suffix={<span>.com</span>}
          allowClear
        />
      </div>
      <div className="flex flex-col gap-5 justify-center w-full max-w-[500px]">
        <InputNumber placeholder="Number..." />
        <InputNumber
          placeholder="Number..."
          maxLength={10}
          value={0}
          min={-10}
          max={10}
          step={0.5}
          prefix={<span>$</span>}
          suffix={<span>USD</span>}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center w-full max-w-[500px]">
        <DatePicker />
      </div>
      <div className="flex flex-col gap-5 justify-center w-full max-w-[500px]">
        <Select />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <div className="w-[calc(100vw_-_40px)] max-w-[500px] min-h-[200px]">
            hello
          </div>
        </Dialog>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <Button
          onClick={() => setPopoverOpen(!popoverOpen)}
          ref={popoverButtonRef}
        >
          Open popover
        </Button>
        <Popover
          open={popoverOpen}
          onOpenChange={setPopoverOpen}
          anchorRef={popoverButtonRef}
          placement="right"
        >
          <div className="p-3">
            <h3 className="font-bold">Popover Content</h3>
            <p>This is the popover content</p>
          </div>
        </Popover>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <Tooltip placement="right" content="This is the tool content">
          <Button>Tooltip</Button>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <Button onClick={() => setDrawerOpen(true)}>Open drawer</Button>
        <Drawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          placement="bottom"
        >
          <div className="min-w-full min-h-[200px] overflow-y-auto">Hello</div>
        </Drawer>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <BottomSheet />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <Switch />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <Checkbox />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <RadioGroup />
      </div>
    </div>
  );
}
