import { ListResponseDto } from './list-response-dto';
import { DeliveryReceiver } from '../models/delivery-receiver';

export class DeliveryReceiverListResponseDto extends ListResponseDto {
  data: DeliveryReceiver[];
}
