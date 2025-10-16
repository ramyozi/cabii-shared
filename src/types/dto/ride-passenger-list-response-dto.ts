import { ListResponseDto } from './list-response-dto';
import { RidePassenger } from '../models/ride-passenger';

export class RidePassengerListResponseDto extends ListResponseDto {
  data: RidePassenger[];
}
