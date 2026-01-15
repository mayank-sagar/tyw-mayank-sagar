import type { Booking } from "./Bookings";

export interface ApiResponse {
  success: boolean;
  count: number;
  data: Booking[];
}
