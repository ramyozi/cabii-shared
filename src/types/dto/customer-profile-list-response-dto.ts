import { ListResponseDto } from './list-response-dto';
import { CustomerProfile } from '../models/customer-profile';

export class CustomerProfileListResponseDto extends ListResponseDto {
  data: CustomerProfile[];
}
