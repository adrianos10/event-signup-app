import { ReactChild } from 'react';

export enum Variant {
  Heading1 = 'h1',
  Body1 = 'body1',
  Body2 = 'body2',
  Button = 'button',
}

export enum FontWeight {
  Normal = 'font-normal',
  SemiBold = 'font-semibold',
}

export enum TextTransform {
  Uppercase = 'uppercase',
  Lowercase = 'lowercase',
  Capitalize = 'capitalize',
  Normalcase = 'normal-case',
}

export interface TypographyProps {
  children: ReactChild;
  variant?: Variant;
  component?: string;
  fontWeight?: FontWeight;
  textTransform?: TextTransform;
  customClassName?: string;
}
