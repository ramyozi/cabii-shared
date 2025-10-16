import { Reservation } from '../models/reservation';
import { Date } from '../models/date';

export interface RidePassenger {
  id: string;
  reservation: Reservation;
  name: string;
  age: number;
  hasReducedMobility: boolean;
  createdAt: Date;
  updatedAt: Date;
}
