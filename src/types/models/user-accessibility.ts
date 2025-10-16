import { User } from '../models/user';
import { AccessibilityFeature } from '../models/accessibility-feature';

export interface UserAccessibility {
  id: string;
  user: User;
  feature: AccessibilityFeature;
  createdAt: string;
}
