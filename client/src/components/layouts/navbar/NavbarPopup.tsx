import { NavLabels, navLinks } from '../../../constants/navLinks';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../base/Button';
import { NavButtonAttrs } from './index';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { menu } from '../../../assets/icons';

interface NavbarPopupProps {
  activeLabelName?: NavLabels;
  buttonAttrs: NavButtonAttrs;
}

export const NavbarPopup = (props: NavbarPopupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleClose = () => isOpen && setIsOpen(false);
  const handleToggle = () => setIsOpen(prev => !prev);
  const clickHandler = (link: string) => () => {
    handleClose;
    navigate(link);
  };

  useClickAway(wrapperRef, handleClose, ['click', `${isOpen}`]);

  return (
    <div ref={wrapperRef}>
      <img
        src={menu}
        alt="menu"
        className="w-[34px] h-[34px] object-contain cursor-pointer"
        onClick={handleToggle}
      />
      <div
        className={clsx(
          'absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 rounded-lg transition-all duration-700',
          !isOpen ? '-translate-y-[100vh]' : 'translate-y-0'
        )}
      >
        <ul className="mb-4">
          {navLinks.map(link => (
            <li
              key={link.name}
              className={clsx('flex p-4 rounded-lg', {
                ['bg-[#3a3a43]']: props.activeLabelName == link.name,
              })}
              onClick={clickHandler(link.link)}
            >
              <img
                src={link.imgUrl}
                alt={link.name}
                className={clsx(
                  'w-[24px] h-[24px] object-contain',
                  props.activeLabelName == link.name
                    ? 'grayscale-0'
                    : 'grayscale'
                )}
              />
              <p
                className={clsx(
                  'ml-[20px] font-epilogue font-semibold text-[14px]',
                  props.activeLabelName == link.name
                    ? 'text-[#1dc071]'
                    : 'text-[#808191]'
                )}
              >
                {link.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex mx-4">
          <Button type="button" {...props.buttonAttrs} />
        </div>
      </div>
    </div>
  );
};
