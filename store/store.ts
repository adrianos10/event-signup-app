import { useMemo } from 'react';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import darkModeReducer, { initialDarkModeState } from './reducers/darkMode';
import { StoreAction, StoreState } from './types';

let store: Store<StoreState, StoreAction> | undefined;

export const initialState: StoreState = {
  ...initialDarkModeState,
};

function initStore(preloadedState = initialState) {
  return createStore(
    darkModeReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (
  preloadedState: StoreState
): Store<StoreState, StoreAction> => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(
  initialState: StoreState
): Store<StoreState, StoreAction> {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
}
