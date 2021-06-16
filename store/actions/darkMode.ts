import { SET_DARK_MODE_ACTION_TYPE } from 'store/consts';

export const toggleDarkMode = (
  isDarkMode: boolean
): { type: typeof SET_DARK_MODE_ACTION_TYPE; payload: boolean } => ({
  type: SET_DARK_MODE_ACTION_TYPE,
  payload: isDarkMode,
});
