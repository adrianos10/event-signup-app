import cs from 'classnames';
import Box from 'components/Box';
import DarkModeSwitch from 'components/DarkModeSwitch';
import Form from 'components/Form';
import Typography from 'components/Typography';
import {
  FontWeight,
  TextTransform,
  Variant,
} from 'components/Typography/types';
import EventsContextProvider from 'contexts/EventsContext';
import FormProvider from 'contexts/FormProvider';
import useIsDarkMode from 'store/hooks/useIsDarkMode';

import styles from './Main.module.css';
import { MainPageProps } from './types';

export default function Main({ events }: MainPageProps): JSX.Element {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Typography
          variant={Variant.Heading1}
          fontWeight={FontWeight.SemiBold}
          textTransform={TextTransform.Uppercase}
          customClassName={cs({ [styles['dark-header']]: isDarkMode })}>
          Signup for our event
        </Typography>
        <Typography customClassName={cs({ [styles['dark-text']]: isDarkMode })}>
          Please fill in your personal data and select event date
        </Typography>
        <DarkModeSwitch />
      </div>
      <Box>
        <EventsContextProvider events={events}>
          <FormProvider>
            <Form />
          </FormProvider>
        </EventsContextProvider>
      </Box>
    </div>
  );
}
