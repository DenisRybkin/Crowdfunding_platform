import { createContext, useContext } from 'react';
import { SmartContract } from '@thirdweb-dev/react';
import { BaseContract } from 'ethers';
import { ICreateCampaignDto } from '../interfaces/campaign/dto';
import { CampaignType, ICampaign } from '../interfaces/campaign';
import { IDonation } from '../interfaces/donation';

export interface IStateContext {
  address?: string;
  contract?: SmartContract<BaseContract>;
  publishCampaign: (campaign: ICreateCampaignDto) => void;
  getCampaigns: () => Promise<CampaignType[]>;
  getUserCampaigns: () => Promise<CampaignType[]>;
  donate: (pId: number, amount: string) => void;
  getDonations: (pId: number) => Promise<IDonation[]>;
  connect: (connectOptions?: {
    chainId?: number;
  }) => Promise<import('@thirdweb-dev/wallets').MetaMaskWallet>;
}

export const StateContext = createContext<IStateContext | null>(null);
export const useStateContext = () => useContext(StateContext);
