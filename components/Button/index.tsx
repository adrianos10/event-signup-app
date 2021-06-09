// import LoaderIcon from 'components/LoaderIcon';
import Typography from 'components/Typography';
import { Variant as TypographyVariant } from 'components/Typography/types';
import React from 'react';

import styles from './Button.module.css';
import { ButtonProps } from './types';

function Button({
  children,
  disabled,
  loading = false,
  ...restProps
}: ButtonProps): JSX.Element {
  return (
    <button
      className={styles.btn}
      disabled={disabled || loading}
      {...restProps}>
      <Typography variant={TypographyVariant.Button}>{children}</Typography>
      {/* {loading && <LoaderIcon className={styles['loader-icon']} />} */}
    </button>
  );
}

export default Button;
