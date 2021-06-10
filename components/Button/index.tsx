import cs from 'classnames';
import Typography from 'components/Typography';
import { Variant as TypographyVariant } from 'components/Typography/types';
import React from 'react';

import styles from './Button.module.css';
import { ButtonProps } from './types';

function Button({
  children,
  disabled,
  loading = true,
  ...restProps
}: ButtonProps): JSX.Element {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cs(styles.btn, { [styles.disabled]: isDisabled })}
      disabled={isDisabled}
      {...restProps}>
      <Typography variant={TypographyVariant.Button}>{children}</Typography>
    </button>
  );
}

export default Button;
