import { REQUIRED_FIELD_MESSAGE } from 'common/consts';
import { EMAIL_REGEX } from 'common/consts';
import Button from 'components/Button';
import DatePicker from 'components/FormEventDatePicker';
import FormInput from 'components/Input/FormInput';
import { useFormContext } from 'react-hook-form';

import { FieldNames, FormContentProps, FormValues } from './types';

function FormContent({ onSubmit, loading }: FormContentProps): JSX.Element {
  const { handleSubmit } = useFormContext<FormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name={FieldNames.Firstname}
        label="Firstname"
        placeholder="John"
        isRequired
        rules={{
          required: REQUIRED_FIELD_MESSAGE,
        }}
      />
      <FormInput
        name={FieldNames.Lastname}
        label="Lastname"
        placeholder="Doe"
        isRequired
        rules={{
          required: REQUIRED_FIELD_MESSAGE,
        }}
      />
      <FormInput
        name={FieldNames.Email}
        label="Email address"
        placeholder="john.doe@example.com"
        rules={{
          required: REQUIRED_FIELD_MESSAGE,
          pattern: {
            value: EMAIL_REGEX,
            message: 'Please provide valid email address',
          },
        }}
        isRequired
      />
      <div className="mb-6 overflow-auto">
        <DatePicker
          name={FieldNames.EventId}
          rules={{ required: 'Please select event date' }}
        />
      </div>
      <Button type="submit" loading={loading}>
        Signup
      </Button>
    </form>
  );
}

export default FormContent;
