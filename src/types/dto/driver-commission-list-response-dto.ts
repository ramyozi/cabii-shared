import { ListResponseDto } from './list-response-dto';
import { DriverCommission } from '../models/driver-commission';

export class DriverCommissionListResponseDto extends ListResponseDto {
  data: DriverCommission[];
}
