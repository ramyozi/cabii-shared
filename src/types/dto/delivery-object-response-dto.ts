import { BaseResponseDto } from './base-response-dto';
import { DeliveryObject } from '../models/delivery-object';

export class DeliveryObjectResponseDto extends BaseResponseDto {
  data: DeliveryObject;
}
