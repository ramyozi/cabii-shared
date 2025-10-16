import { AccessibilityCategoryEnum } from '../enums/accessibility-category-enum';

export interface AccessibilityFeature {
  id: string;
  name: string;
  description: string | undefined;
  category: AccessibilityCategoryEnum;
  icon: string | undefined;
  createdAt: string;
  updatedAt: string;
}
