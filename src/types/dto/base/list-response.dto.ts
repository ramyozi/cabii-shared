import { BaseResponseDto } from './base-response.dto';

export class ListResponseDto<T = unknown> extends BaseResponseDto<T[]> {
  declare data: T[];
  totalItems: number;
}
