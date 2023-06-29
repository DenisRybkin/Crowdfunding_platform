import React from 'react';
import { loader } from '../../assets/icons';

const defaultDescription = (
  <>
    Transaction is in progress <br /> Please wait...
  </>
);

interface LoaderProps {
  description?: string | JSX.Element;
}

export const Loader = (props: LoaderProps) => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.8)] flex items-center justify-center flex-col">
      <img
        src={loader}
        alt="loader"
        className="w-[100px] h-[100px] object-contain"
      />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
        {props.description ?? defaultDescription}
      </p>
    </div>
  );
};
