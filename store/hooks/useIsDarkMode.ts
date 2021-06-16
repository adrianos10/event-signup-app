import { useSelector } from 'react-redux';
import { StoreState } from 'store/types';

const useIsDarkMode = (): boolean =>
  useSelector<StoreState, boolean>(({ isDarkMode }) => isDarkMode);

export default useIsDarkMode;
