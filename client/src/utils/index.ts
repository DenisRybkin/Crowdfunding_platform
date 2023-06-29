import { NavLabels, navLinks } from '../constants/navLinks';

export const daysLeft = (deadline: number) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (goal: number, raisedAmount: number) =>
  Math.round((raisedAmount * 100) / goal);

export const checkIfImage = (
  url: string,
  callback: (value: boolean) => void
) => {
  let http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  try {
    http.send();
    callback(http.status < 400);
  } catch (e) {
    callback(false);
  }
};
