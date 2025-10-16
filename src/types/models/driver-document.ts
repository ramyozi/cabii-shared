import { DriverDocumentTypeEnum } from '../enums/driver-document-type-enum';
import { DriverDocumentStatusEnum } from '../enums/driver-document-status-enum';
import { Date } from '../models/date';
import { DriverProfile } from '../models/driver-profile';

export interface DriverDocument {
  id: string;
  type: DriverDocumentTypeEnum;
  fileUrl: string;
  status: DriverDocumentStatusEnum;
  expiryDate: Date | undefined;
  driver: DriverProfile;
  createdAt: Date;
  updatedAt: Date;
}
