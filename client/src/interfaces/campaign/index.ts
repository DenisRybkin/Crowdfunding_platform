export interface ICampaign {
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: number;
  amountCollected: string;
  image: string;
}

export type CampaignType = ICampaign & { index: number };
