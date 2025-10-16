import { DriverProfile } from '../models/driver-profile';
import { Date } from '../models/date';

export interface DriverLocation {
  id: string;
  driver: DriverProfile;
  lat: number;
  lng: number;
  headingDeg: number | undefined;
  speedKph: number | undefined;
  createdAt: Date;
}
