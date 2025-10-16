import { Vehicle } from '../models/vehicle';
import { AccessibilityFeature } from '../models/accessibility-feature';
import { Date } from '../models/date';

export interface VehicleAccessibility {
  id: string;
  vehicle: Vehicle;
  feature: AccessibilityFeature;
  createdAt: Date;
}
