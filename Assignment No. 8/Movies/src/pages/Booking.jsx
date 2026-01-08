import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";
import { useState } from "react";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = "BK" + Math.floor(Math.random() * 1000);

    navigate("/ticket", {
      state: {
        movie,
        user: form,
        bookingId
      }
    });
  };

  return (
    <div className="container">
      <h1>Book Ticket - {movie.title}</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Phone"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="btn">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;
