import { Reservation } from '../models/reservation';
import { ReservationEventTypeEnum } from '../enums/reservation-event-type-enum';
export interface ReservationEvent {
  id: string;
  reservation: Reservation;
  type: ReservationEventTypeEnum;
  payload: Record<string, any> | undefined;
  createdAt: string;
}
