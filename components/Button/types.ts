import { ButtonHTMLAttributes, DetailedHTMLProps, ReactText } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactText;
  loading?: boolean;
}
