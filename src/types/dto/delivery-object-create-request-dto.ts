export class DeliveryObjectCreateRequestDto {
  reservationId: string;
  receiverId: string;
  label: string;
  weight: number | undefined;
  description: string | undefined;
}
