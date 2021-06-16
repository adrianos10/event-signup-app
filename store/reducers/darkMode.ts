import { SET_DARK_MODE_ACTION_TYPE } from 'store/consts';
import { StoreAction, StoreState } from 'store/types';

export const initialDarkModeState: StoreState = {
  isDarkMode: false,
};

const darkModeReducer = (
  state = initialDarkModeState,
  action: StoreAction
): StoreState => {
  switch (action.type) {
    case SET_DARK_MODE_ACTION_TYPE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
