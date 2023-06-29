import React from 'react';
import { CountBox, CountBoxProps } from './CountBox';

interface IndicatorListProps {
  data: CountBoxProps[];
}

export const IndicatorList = (props: IndicatorListProps) => {
  return (
    <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
      {props.data.map((item, index) => (
        <CountBox key={index} title={item.title} value={item.value} />
      ))}
    </div>
  );
};
