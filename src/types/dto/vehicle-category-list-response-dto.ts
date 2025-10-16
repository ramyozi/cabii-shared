import { ListResponseDto } from './list-response-dto';
import { VehicleCategory } from '../models/vehicle-category';

export class VehicleCategoryListResponseDto extends ListResponseDto {
  data: VehicleCategory[];
}
