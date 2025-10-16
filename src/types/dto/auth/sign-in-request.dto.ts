import { ActiveRoleEnum } from '../../enums/active-role.enum';

export class SignInRequestDto {
  email: string;
  password: string;
  activeRole: ActiveRoleEnum;
}
