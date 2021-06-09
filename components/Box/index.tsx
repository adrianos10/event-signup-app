import styles from './Box.module.css';
import { BoxProps } from './types';

function Box({ children }: BoxProps): JSX.Element {
  return <div className={styles.box}>{children}</div>;
}

export default Box;
