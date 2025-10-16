export class DriverLocationCreateRequestDto {
  lat: number;
  lng: number;
  headingDeg: number | undefined;
  speedKph: number | undefined;
}
