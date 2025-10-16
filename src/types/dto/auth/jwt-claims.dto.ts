import { ActiveRoleEnum } from '../../enums/active-role.enum';

export class JwtClaimsDto {
  userEmail: string;
  userId: string;
  activeRole: ActiveRoleEnum;
}
