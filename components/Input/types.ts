import { InputHTMLAttributes } from 'react';
import { UseControllerProps } from 'react-hook-form';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  isRequired?: boolean;
  loading?: boolean;
};

export type FormInputProps = Pick<
  InputProps,
  'id' | 'label' | 'className' | 'isRequired' | 'placeholder' | 'loading'
> &
  UseControllerProps;
