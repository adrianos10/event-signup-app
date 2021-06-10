import { TailwindConfig } from 'tailwindcss/tailwind-config';

export interface CustomTailwindConfig extends Omit<TailwindConfig, 'theme'> {
  theme: Omit<TailwindConfig['theme'], 'colors'> & {
    colors: {
      red: string;
      purple: string;
      darkPurple: string;
      lightPurple: string;
      lightGray: string;
      white: string;
      black: string;
    };
  };
}
