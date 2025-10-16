import { CustomerProfile } from '../models/customer-profile';
import { DriverProfile } from '../models/driver-profile';
import { Vehicle } from '../models/vehicle';
import { ReservationTypeEnum } from '../enums/reservation-type-enum';
import { ReservationStatusEnum } from '../enums/reservation-status-enum';
import { Date } from '../models/date';
import { DeliveryObject } from '../models/delivery-object';
import { RidePassenger } from '../models/ride-passenger';
import { ReservationEvent } from '../models/reservation-event';

export interface Reservation {
  id: string;
  customer: CustomerProfile;
  driver: DriverProfile | undefined;
  vehicle: Vehicle | undefined;
  type: ReservationTypeEnum;
  status: ReservationStatusEnum;
  pickupLat: number;
  pickupLng: number;
  dropoffLat: number;
  dropoffLng: number;
  scheduledAt: Date | undefined;
  createdAt: Date;
  updatedAt: Date;
  deliveryObjects: DeliveryObject[] | undefined;
  passengers: RidePassenger[] | undefined;
  events: ReservationEvent[];
  estimatedFare: number | undefined;
  finalFare: number | undefined;
  companyFee: number | undefined;
  driverEarnings: number | undefined;
  estimatedDistanceMeters: number | undefined;
  actualDistanceMeters: number | undefined;
  estimatedDurationSeconds: number | undefined;
  actualDurationSeconds: number | undefined;
}
