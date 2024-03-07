'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import * as RadixCheckbox from '@radix-ui/react-checkbox';

export default function Checkbox() {
  return (
    <div className="flex items-center">
      <RadixCheckbox.Root
        className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
        defaultChecked
        id="c1"
      >
        <RadixCheckbox.Indicator className="text-violet11">
          <CheckIcon className="w-6 h-6" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className="pl-[15px] text-[15px] leading-none" htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  );
}
