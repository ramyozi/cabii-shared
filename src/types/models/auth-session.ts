import { User } from '../models/user';

export interface AuthSession {
  id: string;
  refreshToken: string;
  expiresAt: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  isRevoked: boolean;
}
