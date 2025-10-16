import { AccessibilityCategoryEnum } from '../enums/accessibility-category-enum';

export class AccessibilityFeatureUpdateRequestDto {
  name: string | undefined;
  description: string | undefined;
  icon: string | undefined;
  category: AccessibilityCategoryEnum | undefined;
}
