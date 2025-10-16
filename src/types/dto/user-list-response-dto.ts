import { ListResponseDto } from './list-response-dto';
import { User } from '../models/user';

export class UserListResponseDto extends ListResponseDto {
  data: User[];
}
