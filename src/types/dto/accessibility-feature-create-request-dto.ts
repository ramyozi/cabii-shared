import { AccessibilityCategoryEnum } from '../enums/accessibility-category-enum';

export class AccessibilityFeatureCreateRequestDto {
  name: string;
  description: string | undefined;
  icon: string | undefined;
  category: AccessibilityCategoryEnum;
}
