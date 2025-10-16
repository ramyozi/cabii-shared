import { ListResponseDto } from './list-response-dto';
import { UserAccessibility } from '../models/user-accessibility';

export class UserAccessibilityListResponseDto extends ListResponseDto {
  data: UserAccessibility[];
}
