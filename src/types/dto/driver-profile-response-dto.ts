import { BaseResponseDto } from './base-response-dto';
import { DriverProfile } from '../models/driver-profile';

export class DriverProfileResponseDto extends BaseResponseDto {
  data: DriverProfile;
}
