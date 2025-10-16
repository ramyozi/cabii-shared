import { BaseResponseDto } from './base-response-dto';
import { AccessibilityFeature } from '../models/accessibility-feature';

export class AccessibilityFeatureResponseDto extends BaseResponseDto {
  data: AccessibilityFeature;
}
