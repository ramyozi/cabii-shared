import { RoleEnum } from '../enums/role-enum';
import { ActiveRoleEnum } from '../enums/active-role-enum';
import { DriverProfile } from '../models/driver-profile';
import { CustomerProfile } from '../models/customer-profile';
import { AuthSession } from '../models/auth-session';
import { UserAccessibility } from '../models/user-accessibility';
export interface User {
  id: string;
  isActive: boolean;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string | undefined;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  role: RoleEnum;
  activeRole: ActiveRoleEnum;
  driverProfile: DriverProfile | undefined;
  customerProfile: CustomerProfile | undefined;
  authSessions: AuthSession[];
  accessibilityPreferences: UserAccessibility[];
}
