import { REQUIRED_FIELD_MESSAGE } from 'common/consts';
import { EMAIL_REGEX } from 'common/consts';
import Button from 'components/Button';
import DatePicker from 'components/FormEventDatePicker';
import FormInput from 'components/Input/FormInput';
import { useFormContext } from 'react-hook-form';

import { FormProps } from './types';

function Form({ events }: FormProps): JSX.Element {
  const { handleSubmit } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // eslint-disable-next-line no-console
        console.log(data); // FIXME
      })}>
      <FormInput
        name="firstname"
        label="Firstname"
        placeholder="John"
        isRequired
        rules={{
          required: REQUIRED_FIELD_MESSAGE,
        }}
      />
      <FormInput
        name="lastname"
        label="Lastname"
        placeholder="Doe"
        isRequired
        rules={{
          required: REQUIRED_FIELD_MESSAGE,
        }}
      />
      <FormInput
        name="email"
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
          name="eventId"
          events={events}
          rules={{ required: 'Please select event date' }}
        />
      </div>
      <Button type="submit">Signup</Button>
    </form>
  );
}

export default Form;
