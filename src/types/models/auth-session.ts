import { Date } from '../models/date';
import { User } from '../models/user';

export interface AuthSession {
  id: string;
  refreshToken: string;
  expiresAt: Date;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  isRevoked: boolean;
}
