import { BaseResponseDto } from './base-response-dto';

export class EmailAvailabilityCheckResponseDto extends BaseResponseDto {
  data: { isAvailable: boolean };
}
