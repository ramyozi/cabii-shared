export class BaseResponseDto {
  statusCode: number;
  message: string | undefined;
  data: unknown;
}
