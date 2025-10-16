import { BaseResponseDto } from './base-response-dto';
import { DriverCommission } from '../models/driver-commission';

export class DriverCommissionResponseDto extends BaseResponseDto {
  data: DriverCommission;
}
