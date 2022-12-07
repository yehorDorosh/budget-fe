import { AppDispatch } from '../index';
import { useAppSelector } from '../../hooks/useReduxTS';

export const getPath = (page: string) => {
  return (dispatch: AppDispatch): string => {
    const links = useAppSelector(state => state.navigation.links);
    const currentLink = links.find(link => link.page === page);
    return currentLink ? currentLink.path : '';
  };
};
