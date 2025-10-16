import { BaseResponseDto } from './base-response-dto';
import { RidePassenger } from '../models/ride-passenger';

export class RidePassengerResponseDto extends BaseResponseDto {
  data: RidePassenger;
}
