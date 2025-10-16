import { ListResponseDto } from './list-response-dto';
import { DriverProfile } from '../models/driver-profile';

export class DriverProfileListResponseDto extends ListResponseDto {
  data: DriverProfile[];
}
