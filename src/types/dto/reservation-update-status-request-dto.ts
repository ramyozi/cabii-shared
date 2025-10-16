import { ReservationStatusEnum } from '../enums/reservation-status-enum';

export class ReservationUpdateStatusRequestDto {
  status: ReservationStatusEnum;
}
