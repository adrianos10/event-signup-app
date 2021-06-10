import { DayPickerProps } from 'react-day-picker';
import { UseControllerProps } from 'react-hook-form';

import { Event } from '.prisma/client';

export interface FormEventDatePickerProps extends UseControllerProps {
  events?: Event[];
  dayPickerOptions?: DayPickerProps;
}
