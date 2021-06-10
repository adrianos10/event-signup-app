import { DayPickerProps } from 'react-day-picker';
import { UseControllerProps } from 'react-hook-form';

export interface FormEventDatePickerProps extends UseControllerProps {
  dayPickerOptions?: DayPickerProps;
}
