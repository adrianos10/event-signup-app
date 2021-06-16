import { Action } from 'redux';

import { SET_DARK_MODE_ACTION_TYPE } from './consts';

export interface StoreState {
  isDarkMode: boolean;
}

export interface StoreAction extends Action<typeof SET_DARK_MODE_ACTION_TYPE> {
  payload: boolean;
}
