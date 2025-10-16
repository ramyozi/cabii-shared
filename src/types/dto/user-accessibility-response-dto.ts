import { BaseResponseDto } from './base-response-dto';
import { UserAccessibility } from '../models/user-accessibility';

export class UserAccessibilityResponseDto extends BaseResponseDto {
  data: UserAccessibility;
}
