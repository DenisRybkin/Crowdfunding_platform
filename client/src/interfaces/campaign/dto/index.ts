import { BigNumber } from 'ethers';

export interface ICreateCampaignDto {
  name: string;
  title: string;
  description: string;
  target: string | BigNumber;
  deadline: string;
  image: string;
}
