import React from 'react';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

interface ThirdWebProviderProps {
  children: React.ReactNode;
}

export const ThirdWebProvider = (props: ThirdWebProviderProps) => {
  return (
    <ThirdwebProvider activeChain={ChainId.Goerli}>
      {props.children}
    </ThirdwebProvider>
  );
};
