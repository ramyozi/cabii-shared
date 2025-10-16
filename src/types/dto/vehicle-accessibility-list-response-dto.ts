import { ListResponseDto } from './list-response-dto';
import { VehicleAccessibility } from '../models/vehicle-accessibility';

export class VehicleAccessibilityListResponseDto extends ListResponseDto {
  data: VehicleAccessibility[];
}
