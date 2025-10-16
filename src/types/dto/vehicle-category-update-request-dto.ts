import { Date } from '../models/date';

export class VehicleCategoryUpdateRequestDto {
  name: string | undefined;
  description: string | undefined;
  icon: string | undefined;
  updatedAt: Date | undefined;
}
