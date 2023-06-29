import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from '../assets/icons';

export enum NavLabels {
  DASHBOARD = 'Dashboard',
  CAMPAIGN = 'Campaign',
  PAYMENT = 'Payment',
  WITHDRAW = 'Withdraw',
  PROFILE = 'Profile',
  LOGOUT = 'Logout',
}

export enum NavLinks {
  DASHBOARD = '/',
  CREATE_CAMPAIGN = '/create-campaign',
  CAMPAIGN_DETAILS = '/create-campaign/',
  PAYMENT = '/',
  WITHDRAW = '/',
  PROFILE = '/profile',
  LOGOUT = '/logout',
}

export interface INavLink {
  name: NavLabels;
  imgUrl: string;
  link: NavLinks;
  disabled?: boolean;
}

export const navLinks: INavLink[] = [
  {
    name: NavLabels.DASHBOARD,
    imgUrl: dashboard,
    link: NavLinks.DASHBOARD,
  },
  {
    name: NavLabels.CAMPAIGN,
    imgUrl: createCampaign,
    link: NavLinks.CREATE_CAMPAIGN,
  },
  {
    name: NavLabels.PAYMENT,
    imgUrl: payment,
    link: NavLinks.PAYMENT,
    disabled: true,
  },
  {
    name: NavLabels.WITHDRAW,
    imgUrl: withdraw,
    link: NavLinks.WITHDRAW,
    disabled: true,
  },
  {
    name: NavLabels.PROFILE,
    imgUrl: profile,
    link: NavLinks.PROFILE,
  },
  {
    name: NavLabels.LOGOUT,
    imgUrl: logout,
    link: NavLinks.LOGOUT,
    disabled: true,
  },
];
