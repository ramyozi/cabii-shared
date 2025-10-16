import { DriverDocumentTypeEnum } from '../enums/driver-document-type-enum';

export class DriverDocumentCreateRequestDto {
  filePath: string;
  driverId: string;
  documentType: DriverDocumentTypeEnum;
  expiryDate: string | undefined;
}
