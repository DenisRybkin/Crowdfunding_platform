import { ToastProvider } from './ToastProvider';
import { RouterProvider } from './RouterProvider';
import { ThirdWebProvider } from './ThirdWebProvider';
import { StateContextProvider } from './StateContextProvider';

interface RootProviderProps {
  children: React.ReactNode;
}
export const RootProvider = (props: RootProviderProps) => {
  return (
    <ThirdWebProvider>
      <RouterProvider>
        <ToastProvider />
        <StateContextProvider>{props.children}</StateContextProvider>
      </RouterProvider>
    </ThirdWebProvider>
  );
};
