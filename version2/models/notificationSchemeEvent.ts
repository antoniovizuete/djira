import { NotificationEvent } from './notificationEvent.ts';
import { EventNotification } from './eventNotification.ts';

/** Details about a notification scheme event. */
export interface NotificationSchemeEvent {
  event?: NotificationEvent;
  notifications?: EventNotification[];
}
