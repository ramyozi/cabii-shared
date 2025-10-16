import { BaseResponseDto } from './base-response-dto';

export class PhoneAvailabilityCheckResponseDto extends BaseResponseDto {
  data: { isAvailable: boolean };
}
