import cs from 'classnames';
import Typography from 'components/Typography';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Switch from 'react-switch';
import { toggleDarkMode } from 'store/actions/darkMode';
import useIsDarkMode from 'store/hooks/useIsDarkMode';

import styles from './DarkModeSwitch.module.css';

function DarkModeSwitch(): JSX.Element {
  const dispatch = useDispatch();
  const isDarkMode = useIsDarkMode();

  const onChange = useCallback<(state: boolean) => void>(
    (state) => {
      dispatch(toggleDarkMode(state));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <label
      htmlFor="dark-mode-switch"
      className={cs(styles.label, {
        [styles['label-dark']]: isDarkMode,
      })}>
      <Typography>Use dark side</Typography>
      <Switch checked={isDarkMode} id="dark-mode-switch" onChange={onChange} />
    </label>
  );
}

export default DarkModeSwitch;
