import { Reservation } from '../models/reservation';
export interface RidePassenger {
  id: string;
  reservation: Reservation;
  name: string;
  age: number;
  hasReducedMobility: boolean;
  createdAt: string;
  updatedAt: string;
}
