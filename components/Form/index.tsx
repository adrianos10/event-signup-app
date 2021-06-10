import axios from 'axios';
import { CREATE_PARTICIPANT_ENDPOINT } from 'common/consts';
import { ALREADY_EXISTS_STATUS_CODE } from 'pages/api/consts';
import { CreateParticipantHandlerResponse } from 'pages/api/types';
import { useCallback, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

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

      const { data } = await axios.post<CreateParticipantHandlerResponse>(
        CREATE_PARTICIPANT_ENDPOINT,
        values
      );

      if (data?.statusCode === ALREADY_EXISTS_STATUS_CODE) {
        setQueryStatus({ loading: false, data: data.participant });

        return;
      }

      setQueryStatus({ loading: false, success: true });
    } catch (error) {
      setQueryStatus({ loading: false, error });
    }
  }, []);

  return queryStatus.success ? (
    <SuccessMessage />
  ) : (
    <FormContent onSubmit={onSubmit} loading={queryStatus.loading} />
  );
}

export default Form;
