import { User } from '../models/user';
import { AccessibilityFeature } from '../models/accessibility-feature';
import { Date } from '../models/date';

export interface UserAccessibility {
  id: string;
  user: User;
  feature: AccessibilityFeature;
  createdAt: Date;
}
