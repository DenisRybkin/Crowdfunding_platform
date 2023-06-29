import { money } from '../../../assets/icons';

export const CreateCampaignInfo = () => {
  return (
    <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[110px] rounded-[10px]">
      <img
        src={money}
        alt="money"
        className="w-[40px] h-[40px] object-contain"
      />
      <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
        You will get 100% of the raised amount
      </h4>
    </div>
  );
};
