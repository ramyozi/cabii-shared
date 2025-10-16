import { BaseResponseDto } from './base-response-dto';
import { AuthTokenDto } from './auth-token-dto';

export class AuthTokenResponseDto extends BaseResponseDto {
  data: AuthTokenDto;
}
