import axios from 'axios';
import { CREATE_PARTICIPANT_ENDPOINT } from 'common/consts';
import { useCallback, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

import FormContent from './FormContent';
import SuccessMessage from './SuccessMessage';
import { FormValues, QueryStatus } from './types';

function Form(): JSX.Element {
  const [queryStatus, setQueryStatus] = useState<QueryStatus>({
    loading: false,
  });

  const onSubmit: SubmitHandler<FormValues> = useCallback(async (values) => {
    try {
      setQueryStatus({ loading: true });

      await axios.post(CREATE_PARTICIPANT_ENDPOINT, values);

      setQueryStatus({ loading: false, success: true });
    } catch (error) {
      const alreadySignedUpError = error.response.status === 409;

      toast(
        alreadySignedUpError
          ? 'You have already signed up with this email address'
          : error.message,
        { type: 'error' }
      );
      setQueryStatus({ loading: false });
    }
  }, []);

  return queryStatus.success ? (
    <SuccessMessage>
      Thank you! You have signed up for our event!
    </SuccessMessage>
  ) : (
    <FormContent onSubmit={onSubmit} loading={queryStatus.loading} />
  );
}

export default Form;
