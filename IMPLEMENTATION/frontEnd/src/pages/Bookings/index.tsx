import { Link } from "react-router-dom";
import { useBookings } from "../../hooks/useBookings";
import type { Booking } from "../../models/Bookings";

const BookingsList = () => {
  const { data, loading, error } = useBookings();

  let jsx: React.ReactElement | null = null;
  if (loading) {
    jsx = <p className="status-text">Loading bookings...</p>;
  } else if (error) {
    jsx = <p className="status-text error">{error}</p>;
  } else if (data.length === 0) {
    jsx = <p className="status-text">No bookings found</p>;
  } else {
    jsx = (
      <div className="bookings-container">
        {data.map((booking: Booking) => (
          <div key={booking._id} className="booking-card">
            <h3 className="yatch-name">{booking.yatchName}</h3>

            <div className="booking-row">
              <span className="label">Customer:</span>
              <span>{booking.customerName}</span>
            </div>

            <div className="booking-row">
              <span className="label">Start Date:</span>
              <span>{new Date(booking.start_date).toLocaleDateString()}</span>
            </div>

            <div className="booking-row">
              <span className="label">End Date:</span>
              <span>{new Date(booking.end_date).toLocaleDateString()}</span>
            </div>

            <div className="status-badge">
              Status: {booking.status === 1 ? "Active" : "Inactive"}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h2>Bookings</h2>
        <Link to={`/add`} className="primary-btn">
          Create Booking
        </Link>
      </div>
      {jsx}
    </div>
  );
};

export default BookingsList;
