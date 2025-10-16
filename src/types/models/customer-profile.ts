import { User } from '../models/user';
import { Reservation } from '../models/reservation';
export interface CustomerProfile {
  id: string;
  user: User;
  reservations: Reservation[];
}
