'use client';

import * as RadixRadioGroup from '@radix-ui/react-radio-group';

export default function RadioGroup() {
  return (
    <>
      <RadixRadioGroup.Root
        className="flex flex-col gap-2.5"
        defaultValue="default"
        aria-label="View density"
      >
        <div className="flex items-center">
          <RadixRadioGroup.Item
            className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
            value="default"
            id="r1"
          >
            <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue-600" />
          </RadixRadioGroup.Item>
          <label className="text-[15px] leading-none pl-[15px]" htmlFor="r1">
            Default
          </label>
        </div>
        <div className="flex items-center">
          <RadixRadioGroup.Item
            className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
            value="comfortable"
            id="r2"
          >
            <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue-600" />
          </RadixRadioGroup.Item>
          <label className="text-[15px] leading-none pl-[15px]" htmlFor="r2">
            Comfortable
          </label>
        </div>
        <div className="flex items-center">
          <RadixRadioGroup.Item
            className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
            value="compact"
            id="r3"
          >
            <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue-600" />
          </RadixRadioGroup.Item>
          <label className="text-[15px] leading-none pl-[15px]" htmlFor="r3">
            Compact
          </label>
        </div>
      </RadixRadioGroup.Root>
    </>
  );
}
