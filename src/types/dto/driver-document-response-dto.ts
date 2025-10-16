import { BaseResponseDto } from './base-response-dto';
import { DriverDocument } from '../models/driver-document';

export class DriverDocumentResponseDto extends BaseResponseDto {
  data: DriverDocument;
}
