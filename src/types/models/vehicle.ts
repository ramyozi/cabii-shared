import { DriverProfile } from '../models/driver-profile';
import { VehicleStatusEnum } from '../enums/vehicle-status-enum';
import { Date } from '../models/date';
import { VehicleCategory } from '../models/vehicle-category';
import { VehicleAccessibility } from '../models/vehicle-accessibility';
import { Reservation } from '../models/reservation';

export interface Vehicle {
  id: string;
  driver: DriverProfile;
  brand: string;
  model: string;
  plate: string;
  color: string;
  chassisNumber: string;
  year: number | undefined;
  status: VehicleStatusEnum;
  insuranceExpiryDate: Date | undefined;
  insuranceFileUrl: string | undefined;
  category: VehicleCategory;
  accessibilityOptions: VehicleAccessibility[];
  reservations: Reservation[];
}
