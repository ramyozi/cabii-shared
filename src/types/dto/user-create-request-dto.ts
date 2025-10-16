import { RoleEnum } from '../enums/role-enum';

export class UserCreateRequestDto {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  role: RoleEnum | undefined;
}
