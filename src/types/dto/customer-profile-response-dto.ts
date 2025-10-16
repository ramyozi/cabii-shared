import { BaseResponseDto } from './base-response-dto';
import { CustomerProfile } from '../models/customer-profile';

export class CustomerProfileResponseDto extends BaseResponseDto {
  data: CustomerProfile;
}
