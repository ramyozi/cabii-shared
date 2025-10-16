import { Reservation } from '../models/reservation';
import { ReservationEventTypeEnum } from '../enums/reservation-event-type-enum';
import { Record } from '../models/record';
import { Date } from '../models/date';

export interface ReservationEvent {
  id: string;
  reservation: Reservation;
  type: ReservationEventTypeEnum;
  payload: Record<string, any> | undefined;
  createdAt: Date;
}
