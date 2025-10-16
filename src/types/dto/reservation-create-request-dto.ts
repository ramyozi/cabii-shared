import { ReservationTypeEnum } from '../enums/reservation-type-enum';

export class ReservationCreateRequestDto {
  customerId: string;
  driverId: string | undefined;
  vehicleId: string | undefined;
  type: ReservationTypeEnum;
  pickupLat: number;
  pickupLng: number;
  dropoffLat: number;
  dropoffLng: number;
  scheduledAt: string | undefined;
}
