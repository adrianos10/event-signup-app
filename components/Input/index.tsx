import cs from 'classnames';
import Typography from 'components/Typography';
import { Variant } from 'components/Typography/types';
import React from 'react';

import styles from './Input.module.css';
import { InputProps } from './types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { id, label, className: customClassName, error, isRequired, ...restProps },
    ref
  ): JSX.Element => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            <Typography component="span" variant={Variant.Body2}>
              {`${label}${isRequired ? '*' : ''}`}
            </Typography>
          </label>
        )}
        <div className={styles['input-wrapper']}>
          <input
            ref={ref}
            className={cs(styles.input, customClassName, {
              [styles.inputError]: error,
            })}
            {...{ id, ...restProps }}
          />
        </div>
        {error && (
          <div className={styles.errorMessage}>
            <Typography component="span" variant={Variant.Body2}>
              {error}
            </Typography>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
