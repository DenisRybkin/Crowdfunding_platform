import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavLabels, NavLinks } from '../../../constants/navLinks';
import { getActiveNavLabel } from '../utils';
import { SearchInput } from './SearchInput';
import { Button } from '../../base/Button';
import { logo, menu, thirdweb } from '../../../assets/icons';
import { NavbarPopup } from './NavbarPopup';
import { useStateContext } from '../../../context/stateContext';

export interface NavButtonAttrs {
  onClick: () => void;
  label: string;
  className: string;
}

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState<NavLabels | undefined>(
    getActiveNavLabel(pathname)
  );

  const state = useStateContext();

  const buttonAttrs: NavButtonAttrs = useMemo(
    () => ({
      onClick: () =>
        state?.address ? navigate(NavLinks.CREATE_CAMPAIGN) : state?.connect(),
      label: state?.address ? 'Create a campaign' : 'Connect',
      className: state?.address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]',
    }),
    [state?.address]
  );

  useEffect(() => setActiveLink(getActiveNavLabel(pathname)), [pathname]);

  return (
    <div className="flex md:flex-row flex-col-reverse justify0between mb-[35px] gap-6">
      <SearchInput />

      <div className="hidden sm:flex flex-row justify-end gap-4">
        <Button type="button" {...buttonAttrs} />
        <Link to={NavLinks.PROFILE}>
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={logo}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={logo}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        <NavbarPopup buttonAttrs={buttonAttrs} activeLabelName={activeLink} />
      </div>
    </div>
  );
};
