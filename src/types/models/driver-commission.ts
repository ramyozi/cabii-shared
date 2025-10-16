import { DriverProfile } from '../models/driver-profile';
import { CommissionTypeEnum } from '../enums/commission-type-enum';

export interface DriverCommission {
  id: string;
  driver: DriverProfile;
  type: CommissionTypeEnum;
  percentage: number | undefined;
  fixedFee: number | undefined;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
