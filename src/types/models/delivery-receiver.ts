import { DeliveryObject } from '../models/delivery-object';

export interface DeliveryReceiver {
  id: string;
  name: string;
  phone: string;
  email: string | undefined;
  objects: DeliveryObject[];
  createdAt: string;
  updatedAt: string;
}
