import React from 'react';

interface StoryBlockProps {
  story: string;
}
export const StoryBlock = (props: StoryBlockProps) => {
  return (
    <div>
      <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
        Story
      </h4>

      <div className="mt-[20px]">
        <div className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px]">
          {props.story}
        </div>
      </div>
    </div>
  );
};
