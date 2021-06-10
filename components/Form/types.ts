import { SubmitHandler } from 'react-hook-form';
export enum FieldNames {
  Firstname = 'firstname',
  Lastname = 'lastname',
  Email = 'email',
  EventId = 'eventId',
}

export interface FormValues {
  [FieldNames.Firstname]: string;
  [FieldNames.Lastname]: string;
  [FieldNames.Email]: string;
  [FieldNames.EventId]: number;
}

export interface FormContentProps {
  loading: boolean;
  onSubmit: SubmitHandler<FormValues>;
}

export interface QueryStatus {
  loading: boolean;
  success?: boolean;
}
