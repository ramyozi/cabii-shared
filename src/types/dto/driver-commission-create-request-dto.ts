import { CommissionTypeEnum } from '../enums/commission-type-enum';

export class DriverCommissionCreateRequestDto {
  type: CommissionTypeEnum;
  percentage: number | undefined;
  fixedFee: number | undefined;
}
