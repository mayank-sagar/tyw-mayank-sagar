import { useEffect, useState } from "react";
import type { Booking } from "../models/Bookings";
import type { ApiResponse } from "../models/api";
import { bookings } from "../constants/apis";

export const useBookings = () => {
  const [data, setData] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(bookings);

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const json: ApiResponse = await res.json();

      if (!json.success) {
        throw new Error("API returned unsuccessful response");
      }

      setData(json.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchBookings,
  };
};
