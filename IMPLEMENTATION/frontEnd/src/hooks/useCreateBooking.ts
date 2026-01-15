import { useState } from "react";
import { bookingsAdd } from "../constants/apis";

interface CreateBookingPayload {
  customerName: string;
  yatchName: string;
  start_date: string;
  end_date: string;
}

interface ApiResponse {
  success: boolean;
  data?: any;
  message?: string;
}

export const useCreateBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createBooking = async (payload: CreateBookingPayload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // add validations
      const res = await fetch(bookingsAdd, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const json: ApiResponse = await res.json();

      if (!json.success) {
        throw new Error(json.message || "Failed to create booking");
      }

      setSuccess(true);
      return json;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createBooking,
    loading,
    error,
    success,
  };
};
