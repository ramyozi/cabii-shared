import { ReservationStatusEnum } from '../enums/reservation-status-enum';
import { Date } from '../models/date';

export class ReservationUpdateRequestDto {
  status: ReservationStatusEnum | undefined;
  driverId: string | undefined;
  scheduledAt: Date | undefined;
  pickupLat: number | undefined;
  pickupLng: number | undefined;
  dropoffLat: number | undefined;
  dropoffLng: number | undefined;
}
