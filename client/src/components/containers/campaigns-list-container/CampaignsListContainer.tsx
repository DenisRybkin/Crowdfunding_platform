import React, { useEffect, useMemo, useState } from 'react';
import { CampaignType } from '../../../interfaces/campaign';
import { IStateContext, useStateContext } from '../../../context/stateContext';
import { DisplayCampaigns } from './DisplayCampaigns';

type CampaignsListStrategyType = 'myOwn' | 'all';

interface IDataByStrategy {
  title: string;
  getCampaigns: (() => Promise<CampaignType[]>) | undefined;
}

interface CampaignsListContainerProps {
  strategy: CampaignsListStrategyType;
}

const getComponentDataByStrategy = (
  state: IStateContext | null,
  strategy: CampaignsListStrategyType
): IDataByStrategy => ({
  title: strategy == 'all' ? 'All Campaigns' : 'Your own Campaigns',
  getCampaigns:
    strategy == 'all' ? state?.getCampaigns : state?.getUserCampaigns,
});

export const CampaignsListContainer = (props: CampaignsListContainerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [campaigns, setCampaigns] = useState<CampaignType[]>([]);

  const state = useStateContext();

  const componentData: IDataByStrategy = useMemo(
    () => getComponentDataByStrategy(state, props.strategy),
    [state?.address]
  );

  const loadCampaigns = async () => {
    setIsLoading(true);
    const data = await componentData.getCampaigns?.();
    setIsLoading(false);
    data && setCampaigns(data);
  };

  useEffect(() => {
    state?.contract && loadCampaigns();
  }, [state?.address, state?.contract]);
  return (
    <>
      <DisplayCampaigns
        title={componentData.title}
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  );
};
