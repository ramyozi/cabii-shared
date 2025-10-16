import { BaseResponseDto } from './base-response-dto';

export class AccessibilityMatchResponseDto extends BaseResponseDto {
  data: { isCompatible: boolean; missingFeatures: string[] };
}
