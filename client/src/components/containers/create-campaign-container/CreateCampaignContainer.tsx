import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICreateCampaignDto } from '../../../interfaces/campaign/dto';
import { Loader } from '../../base/Loader';
import { CreateCampaignForm } from './CreateCampaignForm';
import { checkIfImage } from '../../../utils';
import { toast } from 'react-toastify';
import {
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form/dist/types/form';
import { NavLinks } from '../../../constants/navLinks';
import { useStateContext } from '../../../context/stateContext';
import { ethers } from 'ethers';

export interface IChildRef {
  setError: UseFormSetError<ICreateCampaignDto>;
  setValue: UseFormSetValue<ICreateCampaignDto>;
}

export const CreateCampaignContainer = () => {
  const navigate = useNavigate();
  const childRef = useRef<IChildRef | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const state = useStateContext();

  const handleCreate = async (dto: ICreateCampaignDto) => {
    checkIfImage(dto.image, async exists => {
      console.log(exists, 111111);
      if (exists) {
        setIsLoading(true);
        await state?.publishCampaign({
          ...dto,
          target: ethers.utils.parseUnits(dto.target as string, 18),
        });
        setIsLoading(false);
        navigate(NavLinks.DASHBOARD);
      } else {
        toast.error('Provide valid image URL');
        childRef.current?.setError('image', {
          type: 'custom',
          message: 'Provide valid image URL',
        });
      }
    });
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign 🚀
        </h1>
      </div>
      <CreateCampaignForm
        ref={childRef}
        onCreate={handleCreate}
        isLoading={isLoading}
      />
    </div>
  );
};
