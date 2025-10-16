import { ReservationTypeEnum } from '../enums/reservation-type-enum';
import { Date } from '../models/date';

export class ReservationCreateRequestDto {
  customerId: string;
  driverId: string | undefined;
  vehicleId: string | undefined;
  type: ReservationTypeEnum;
  pickupLat: number;
  pickupLng: number;
  dropoffLat: number;
  dropoffLng: number;
  scheduledAt: Date | undefined;
}
