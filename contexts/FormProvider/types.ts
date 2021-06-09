import { ReactElement } from 'react';
import { FieldValues, UseFormProps } from 'react-hook-form';

export interface FormProviderProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends Record<string, unknown> = Record<string, unknown>
> {
  children: ReactElement;
  options?: UseFormProps<TFieldValues, TContext>;
}
