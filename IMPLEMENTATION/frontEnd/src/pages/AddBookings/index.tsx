import { useState } from "react";
import { useCreateBooking } from "../../hooks/useCreateBooking";
import { Link } from "react-router-dom";

const CreateBookingForm = () => {
  const { createBooking, loading, error, success } = useCreateBooking();

  const [formData, setFormData] = useState({
    customerName: "",
    yatchName: "",
    start_date: "",
    end_date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add validations
    await createBooking(formData);

    if (!error) {
      setFormData({
        customerName: "",
        yatchName: "",
        start_date: "",
        end_date: "",
      });
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Create Booking</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Customer Name
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Yacht Name
          <input
            type="text"
            name="yatchName"
            value={formData.yatchName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Start Date
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          End Date
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            required
          />
        </label>

        <div className="btn-container">
          <Link to={`/`} className="primary-btn">
            Back to Bookings
          </Link>
          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Booking"}
          </button>
        </div>

        {error && <p className="form-error">{error}</p>}
        {success && (
          <p className="form-success">Booking created successfully!</p>
        )}
      </form>
    </div>
  );
};

export default CreateBookingForm;
