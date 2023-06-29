import { BrowserRouter as Router } from 'react-router-dom';
interface RouterProviderProps {
  children: React.ReactNode;
}

export const RouterProvider = (props: RouterProviderProps) => {
  return <Router>{props.children}</Router>;
};
