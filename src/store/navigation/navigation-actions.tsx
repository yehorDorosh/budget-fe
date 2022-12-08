import { AppDispatch, RootState } from '../index';

export const getPath = (page: string) => {
  return (dispatch: AppDispatch, getState: () => RootState): string => {
    const links = getState().navigation.links;
    const currentLink = links.find((link) => link.page === page);
    return currentLink ? currentLink.path : '';
  };
};
