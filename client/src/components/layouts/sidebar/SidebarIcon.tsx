import { INavLink } from '../../../constants/navLinks';
import clsx from 'clsx';

interface SidebarIconProps {
  className?: string;
  navLink?: INavLink;
  imageUrl: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (navLink: Pick<INavLink, 'disabled' | 'link'>) => void;
}

export const SidebarIcon = (props: SidebarIconProps) => {
  const wrapperClassNames = clsx(
    'w-[48px] h-[48px] rounded-lg flex justify-center items-center',
    props.className,
    {
      ['bg-[#2c2f32]']: props.isActive,
      ['cursor-pointer']: !props.isDisabled,
    }
  );

  const imageClassName = clsx('w-1/2 h-1/2', {
    ['grayscale']: !props.isActive,
  });

  const handleClick = () => props.onClick?.(props.navLink!);

  return (
    <div className={wrapperClassNames} onClick={handleClick}>
      <img src={props.imageUrl} alt="route logo" className={imageClassName} />
    </div>
  );
};
