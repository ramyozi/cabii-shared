import { BaseResponseDto } from './base-response-dto';
import { User } from '../models/user';

export class UserResponseDto extends BaseResponseDto {
  data: User;
}
