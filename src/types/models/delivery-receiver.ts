import { DeliveryObject } from '../models/delivery-object';
import { Date } from '../models/date';

export interface DeliveryReceiver {
  id: string;
  name: string;
  phone: string;
  email: string | undefined;
  objects: DeliveryObject[];
  createdAt: Date;
  updatedAt: Date;
}
