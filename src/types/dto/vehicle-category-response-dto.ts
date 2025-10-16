import { BaseResponseDto } from './base-response-dto';
import { VehicleCategory } from '../models/vehicle-category';

export class VehicleCategoryResponseDto extends BaseResponseDto {
  data: VehicleCategory;
}
