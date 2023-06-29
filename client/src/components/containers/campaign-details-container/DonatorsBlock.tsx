import React from 'react';
import { IDonation } from '../../../interfaces/donation';

interface DonatorsBlockProps {
  donators: IDonation[];
}

export const DonatorsBlock = (props: DonatorsBlockProps) => {
  return (
    <div>
      <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
        Donators
      </h4>

      <div className="mt-[20px] flex flex-col gap-4 max-h-[400px] overflow-y-auto">
        {props.donators.length > 0 ? (
          props.donators.map((item, index) => (
            <div
              key={`${item.donator}-${index}`}
              className="flex justify-between items-center gap-4"
            >
              <p className="font-epilogue font-normal text-[16px] truncate text-[#b2b3bd] leading-[26px] break-ll">
                {index + 1}. {item.donator}
              </p>
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">
                {item.donation}
              </p>
            </div>
          ))
        ) : (
          <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
            No donators yet. Be the first one!
          </p>
        )}
      </div>
    </div>
  );
};
