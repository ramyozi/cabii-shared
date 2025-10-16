import { ReservationStatusEnum } from '../enums/reservation-status-enum';

export class ReservationUpdateRequestDto {
  status: ReservationStatusEnum | undefined;
  driverId: string | undefined;
  scheduledAt: string | undefined;
  pickupLat: number | undefined;
  pickupLng: number | undefined;
  dropoffLat: number | undefined;
  dropoffLng: number | undefined;
}
