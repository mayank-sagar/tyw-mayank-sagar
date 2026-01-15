import Booking from "../models/Booking";
import { Request, Response } from "express";

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};
export const createBookings = async (req: Request, res: Response) => {
  try {
    const { customerName, yatchName, start_date, end_date } =
      req.body as never as {
        customerName: String;
        yatchName: String;
        start_date: Date;
        end_date: Date;
        status: number;
      };

    const booking = await Booking.create({
      customerName,
      yatchName,
      start_date,
      end_date,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};
