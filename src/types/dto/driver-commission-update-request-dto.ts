import { CommissionTypeEnum } from '../enums/commission-type-enum';

export class DriverCommissionUpdateRequestDto {
  type: CommissionTypeEnum | undefined;
  percentage: number | undefined;
  fixedFee: number | undefined;
  active: boolean | undefined;
}
