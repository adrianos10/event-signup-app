import { useController } from 'react-hook-form';

import Input from '.';
import { FormInputProps } from './types';

function FormInput({
  name,
  rules,
  defaultValue = '',
  control,
  ...restProps
}: FormInputProps): JSX.Element {
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules, defaultValue, control });

  return <Input {...{ ...restProps, ...field }} error={error?.message} />;
}

export default FormInput;
