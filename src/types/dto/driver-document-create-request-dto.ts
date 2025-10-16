import { DriverDocumentTypeEnum } from '../enums/driver-document-type-enum';
import { Date } from '../models/date';

export class DriverDocumentCreateRequestDto {
  filePath: string;
  driverId: string;
  documentType: DriverDocumentTypeEnum;
  expiryDate: Date | undefined;
}
