import cs from 'classnames';
import useIsDarkMode from 'store/hooks/useIsDarkMode';

import styles from './Box.module.css';
import { BoxProps } from './types';

function Box({ children }: BoxProps): JSX.Element {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={cs(styles.box, { [styles['dark-box']]: isDarkMode })}>
      {children}
    </div>
  );
}

export default Box;
