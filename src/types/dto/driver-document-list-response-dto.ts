import { ListResponseDto } from './list-response-dto';
import { DriverDocument } from '../models/driver-document';

export class DriverDocumentListResponseDto extends ListResponseDto {
  data: DriverDocument[];
}
