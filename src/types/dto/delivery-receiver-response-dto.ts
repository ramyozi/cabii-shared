import { BaseResponseDto } from './base-response-dto';
import { DeliveryReceiver } from '../models/delivery-receiver';

export class DeliveryReceiverResponseDto extends BaseResponseDto {
  data: DeliveryReceiver;
}
