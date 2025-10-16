import { ListResponseDto } from './list-response-dto';
import { AccessibilityFeature } from '../models/accessibility-feature';

export class AccessibilityFeatureListResponseDto extends ListResponseDto {
  data: AccessibilityFeature[];
}
