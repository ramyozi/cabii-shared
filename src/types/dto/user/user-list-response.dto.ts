import { ListResponseDto } from '../base/list-response.dto';
import { UserResponseDto } from './user-response.dto';

export class UserListResponseDto extends ListResponseDto<UserResponseDto> {
  declare data: UserResponseDto[];
}
