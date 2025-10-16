import { BaseResponseDto } from './base-response-dto';
import { Reservation } from '../models/reservation';

export class ReservationResponseDto extends BaseResponseDto {
  data: Reservation;
}
