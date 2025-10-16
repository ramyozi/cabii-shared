import { ListResponseDto } from './list-response-dto';
import { DeliveryObject } from '../models/delivery-object';

export class DeliveryObjectListResponseDto extends ListResponseDto {
  data: DeliveryObject[];
}
