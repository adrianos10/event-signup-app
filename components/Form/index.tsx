import Button from 'components/Button';
import FormInput from 'components/Input/FormInput';
import { useFormContext } from 'react-hook-form';

function Form(): JSX.Element {
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
      />
      <FormInput
        name="lastname"
        label="Lastname"
        placeholder="Doe"
        isRequired
      />
      <FormInput
        name="email"
        label="Email address"
        placeholder="john.doe@example.com"
        isRequired
      />
      <Button type="submit">Signup</Button>
    </form>
  );
}

export default Form;
