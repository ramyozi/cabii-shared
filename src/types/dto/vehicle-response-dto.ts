import { BaseResponseDto } from './base-response-dto';
import { Vehicle } from '../models/vehicle';

export class VehicleResponseDto extends BaseResponseDto {
  data: Vehicle;
}
