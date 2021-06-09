import {
  FieldValues,
  FormProvider as NativeFormProvider,
  useForm,
} from 'react-hook-form';

import { FormProviderProps } from './types';

function FormProvider<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends Record<string, unknown> = Record<string, unknown>
>({
  children,
  options,
}: FormProviderProps<TFieldValues, TContext>): JSX.Element {
  const methods = useForm<TFieldValues, TContext>(options);

  return <NativeFormProvider {...methods}>{children}</NativeFormProvider>;
}

export default FormProvider;
