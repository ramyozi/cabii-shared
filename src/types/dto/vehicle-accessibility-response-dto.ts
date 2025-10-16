import { BaseResponseDto } from './base-response-dto';
import { VehicleAccessibility } from '../models/vehicle-accessibility';

export class VehicleAccessibilityResponseDto extends BaseResponseDto {
  data: VehicleAccessibility;
}
