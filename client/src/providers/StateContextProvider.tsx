import {
  useAddress,
  useContract,
  useContractWrite,
  useMetamask,
} from '@thirdweb-dev/react';
import { ICreateCampaignDto } from '../interfaces/campaign/dto';
import { toast } from 'react-toastify';
import { StateContext } from '../context/stateContext';
import { CampaignType } from '../interfaces/campaign';
import { ethers } from 'ethers';

interface StateContextProviderProps {
  children: React.ReactNode;
}

export const StateContextProvider = (props: StateContextProviderProps) => {
  const address = useAddress();
  const connect = useMetamask();
  const { contract } = useContract<string>(
    import.meta.env.VITE_CONTRACT_ADDRESS
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    'createCampaign'
  );

  const publishCampaign = async (campaign: ICreateCampaignDto) => {
    try {
      // @ts-ignore
      const data = await createCampaign({
        args: [
          address, //owner
          campaign.title,
          campaign.description,
          campaign.target, // goal
          new Date(campaign.deadline).getTime(), // deadline
          campaign.image,
        ],
      });
    } catch (error) {
      toast.error('Contract call failure');
    }
  };

  const getCampaigns = async (): Promise<CampaignType[]> => {
    try {
      const data = await contract?.call('getCampaigns');
      return (data as any[]).map((item, index) => ({
        owner: item.owner as string,
        title: item.title as string,
        description: item.description as string,
        target: ethers.utils.formatEther(item.target.toString()) as string,
        deadline: item.deadline.toNumber() as number,
        amountCollected: ethers.utils.formatEther(
          item.amountCollected.toString()
        ) as string,
        image: item.image as string,
        index,
      }));
    } catch (e) {
      console.log(e);
      toast.error('Contract call failure');
      return [];
    }
  };

  const getUserCampaigns = async (): Promise<CampaignType[]> => {
    const data = await getCampaigns();
    return data.filter(item => item.owner == address);
  };

  const donate = async (pId: number, amount: string) =>
    contract?.call('donateToCampaign', [pId], {
      value: ethers.utils.parseEther(amount),
    });

  const getDonations = async (pId: number) => {
    const donations = await contract?.call('getDonators', [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        publishCampaign,
        connect,
        getCampaigns,
        contract,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
