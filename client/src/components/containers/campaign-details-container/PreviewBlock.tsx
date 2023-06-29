import React from 'react';
import { calculateBarPercentage } from '../../../utils';
import { IndicatorList } from './IndicatorList';

interface PreviewBlockProps {
  image: string;
  target: number;
  amountCollected: number;
  remainingDays: string;
  donatorsLength: number;
}

export const PreviewBlock = (props: PreviewBlockProps) => {
  return (
    <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
      <div className="flex-1 flex-col">
        <img
          src={props.image}
          alt="Campaign image"
          className="w-full h-[410px] object-cover rounded-xl"
        />
        <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
          <div
            className="absolute h-full bg-[#4acd8d]"
            style={{
              width: `${calculateBarPercentage(
                props.target,
                props.amountCollected
              )}%`,
              maxWidth: '100%',
            }}
          />
        </div>
      </div>
      <IndicatorList
        data={[
          { title: 'Days Left', value: props.remainingDays },
          {
            title: `Raised of ${props.target}`,
            value: props.amountCollected,
          },
          {
            title: 'Total Backers',
            value: props.donatorsLength,
          },
        ]}
      />
    </div>
  );
};
