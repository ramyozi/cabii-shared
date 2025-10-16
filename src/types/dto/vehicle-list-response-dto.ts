import { ListResponseDto } from './list-response-dto';
import { Vehicle } from '../models/vehicle';

export class VehicleListResponseDto extends ListResponseDto {
  data: Vehicle[];
}
