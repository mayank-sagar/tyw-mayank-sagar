import mongoose, { Schema } from "mongoose";

export interface BookingInterface {
  customerName: String;
  yatchName: String;
  start_date: Date;
  end_date: Date;
  status: number;
}

const BookingSchema = new Schema<BookingInterface>(
  {
    customerName: {
      type: String,
      required: true,
    },
    yatchName: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 1, // 1 = active, 0 = canceled
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model<BookingInterface>("Booking", BookingSchema);
export default Booking;
