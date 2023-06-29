import React from 'react';
import { thirdweb } from '../../../assets/icons';

interface CreatorBlockProps {
  owner: string;
}

export const CreatorBlock = (props: CreatorBlockProps) => {
  return (
    <div>
      <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
        Creator
      </h4>
      <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
        <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
          <img
            src={thirdweb}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        <div>
          <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">
            {props.owner}
          </h4>
          <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
            10 Campaigns
          </p>
        </div>
      </div>
    </div>
  );
};
