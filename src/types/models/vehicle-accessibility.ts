import { Vehicle } from '../models/vehicle';
import { AccessibilityFeature } from '../models/accessibility-feature';
export interface VehicleAccessibility {
  id: string;
  vehicle: Vehicle;
  feature: AccessibilityFeature;
  createdAt: string;
}
