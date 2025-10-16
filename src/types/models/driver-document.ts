import { DriverDocumentTypeEnum } from '../enums/driver-document-type-enum';
import { DriverDocumentStatusEnum } from '../enums/driver-document-status-enum';
import { DriverProfile } from '../models/driver-profile';

export interface DriverDocument {
  id: string;
  type: DriverDocumentTypeEnum;
  fileUrl: string;
  status: DriverDocumentStatusEnum;
  expiryDate: string | undefined;
  driver: DriverProfile;
  createdAt: string;
  updatedAt: string;
}
