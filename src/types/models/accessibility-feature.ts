import { AccessibilityCategoryEnum } from '../enums/accessibility-category-enum';
import { Date } from '../models/date';

export interface AccessibilityFeature {
  id: string;
  name: string;
  description: string | undefined;
  category: AccessibilityCategoryEnum;
  icon: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}
