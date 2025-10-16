import { Reservation } from '../models/reservation';
import { DeliveryReceiver } from '../models/delivery-receiver';
import { Date } from '../models/date';

export interface DeliveryObject {
  id: string;
  reservation: Reservation;
  receiver: DeliveryReceiver;
  label: string;
  weight: number | undefined;
  description: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}
