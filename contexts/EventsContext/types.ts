import { Event } from '@prisma/client';

export interface EventsContextValue {
  events: Event[];
}
