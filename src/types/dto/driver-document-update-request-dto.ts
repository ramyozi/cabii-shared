import { Date } from '../models/date';

export class DriverDocumentUpdateRequestDto {
  filePath: string | undefined;
  expiryDate: Date | undefined;
}
