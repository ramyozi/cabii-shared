import { Vehicle } from '../models/vehicle';
import { Reservation } from '../models/reservation';
import { DriverDocument } from '../models/driver-document';
import { DriverCommission } from '../models/driver-commission';
import { User } from '../models/user';
import { Date } from '../models/date';

export interface DriverProfile {
  id: string;
  isAvailable: boolean;
  driverLicenseSerial: string;
  vehicles: Vehicle[];
  activeVehicle: Vehicle | undefined;
  reservations: Reservation[];
  documents: DriverDocument[];
  commissions: DriverCommission[];
  user: User;
  ratingAvg: number;
  totalRatings: number;
  currentLat: number | undefined;
  currentLng: number | undefined;
  lastSeenAt: Date | undefined;
}
