import { BaseResponseDto } from './base-response-dto';

export class ListResponseDto extends BaseResponseDto {
  data: unknown[];
}
