import React, { PropsWithChildren, useContext } from 'react';

import { EventsContextValue } from './types';

const EventsContext = React.createContext<EventsContextValue>({ events: [] });

const EventsContextProvider = ({
  events,
  children,
}: PropsWithChildren<EventsContextValue>): JSX.Element => {
  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = (): EventsContextValue =>
  useContext(EventsContext);

export default EventsContextProvider;
