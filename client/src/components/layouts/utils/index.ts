import { NavLabels, navLinks } from '../../../constants/navLinks';

export const getActiveNavLabel = (pathname: string): NavLabels | undefined =>
  navLinks.find(item => item.link.includes(pathname))?.name;
