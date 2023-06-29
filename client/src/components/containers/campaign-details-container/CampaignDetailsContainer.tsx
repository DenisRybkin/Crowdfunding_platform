import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStateContext } from '../../../context/stateContext';
import { daysLeft } from '../../../utils';
import { Loader } from '../../base/Loader';
import { StoryBlock } from './StoryBlock';
import { DonatorsBlock } from './DonatorsBlock';
import { CreatorBlock } from './CreatorBlock';
import { PreviewBlock } from './PreviewBlock';
import { DonateBlock } from './DonateBlock';
import { IDonation } from '../../../interfaces/donation';

export const CampaignDetailsContainer = () => {
  const location = useLocation();
  const state = useStateContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>('');
  const [donators, setDonators] = useState<IDonation[]>([]);

  const remainingDays = daysLeft(location.state.deadline);

  const handleLoadDonations = async () => {
    const data = await state?.getDonations(location.state.index);
    data && setDonators(data);
  };

  const handleDonate = async () => {
    setIsLoading(true);
    await state?.donate(location.state.index, amount);
    setIsLoading(false);
  };

  useEffect(() => {
    state?.contract && handleLoadDonations();
  }, [state?.contract, state?.address]);

  return (
    <>
      {isLoading && <Loader />}
      <PreviewBlock
        remainingDays={remainingDays}
        image={location.state.image}
        donatorsLength={donators.length}
        amountCollected={location.state.amountCollected}
        target={location.state.target}
      />
      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <CreatorBlock owner={location.state.owner} />
          <StoryBlock story={location.state.description} />
          <DonatorsBlock donators={donators} />
        </div>
        <DonateBlock
          amount={amount}
          onDonate={handleDonate}
          onChangeAmount={setAmount}
        />
      </div>
    </>
  );
};
