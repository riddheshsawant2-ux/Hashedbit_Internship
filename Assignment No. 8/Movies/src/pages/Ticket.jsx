import { useLocation, Link } from "react-router-dom";

function Ticket() {
  const { state } = useLocation();

  if (!state) return <h2>No Ticket Found</h2>;

  const { movie, user, bookingId } = state;

  return (
    <div className="container">
      <h1>Your Ticket</h1>

      <div className="ticket">
        <h2>{movie.title}</h2>

        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>

      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}

export default Ticket;
