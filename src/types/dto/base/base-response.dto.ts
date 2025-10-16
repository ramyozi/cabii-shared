export class BaseResponseDto<T = unknown> {
  statusCode: number;
  message?: string;
  data?: T;
}
