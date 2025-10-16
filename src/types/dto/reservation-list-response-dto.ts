import { ListResponseDto } from './list-response-dto';
import { Reservation } from '../models/reservation';

export class ReservationListResponseDto extends ListResponseDto {
  data: Reservation[];
}
