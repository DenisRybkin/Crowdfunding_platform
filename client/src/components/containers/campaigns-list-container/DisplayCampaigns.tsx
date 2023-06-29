import React from 'react';
import { CampaignType } from '../../../interfaces/campaign';
import { useNavigate } from 'react-router-dom';
import { NavLinks } from '../../../constants/navLinks';
import { loader } from '../../../assets/icons';
import { FundCard } from './FundCard';
import clsx from 'clsx';

interface DisplayCampaignsProps {
  title: string;
  isLoading: boolean;
  campaigns: CampaignType[];
}

export const DisplayCampaigns = (props: DisplayCampaignsProps) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign: CampaignType) =>
    navigate(NavLinks.CAMPAIGN_DETAILS + campaign.title, { state: campaign });

  const clickHandler = (campaign: CampaignType) => () =>
    handleNavigate(campaign);

  return (
    <>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {props.title} ({props.campaigns.length})
      </h1>
      <div
        className={clsx(
          'flex h-[70%] flex-wrap w-full mt-[20px] gap-[26px]',
          props.isLoading && 'justify-center items-center'
        )}
      >
        {props.isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}
        {!props.isLoading && props.campaigns.length == 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}
        {!props.isLoading &&
          props.campaigns.length > 0 &&
          props.campaigns.map(campaign => (
            <FundCard
              key={campaign.index}
              {...campaign}
              onClick={clickHandler(campaign)}
            />
          ))}
      </div>
    </>
  );
};
