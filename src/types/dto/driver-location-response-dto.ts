import { BaseResponseDto } from './base-response-dto';
import { DriverLocation } from '../models/driver-location';

export class DriverLocationResponseDto extends BaseResponseDto {
  data: DriverLocation;
}
