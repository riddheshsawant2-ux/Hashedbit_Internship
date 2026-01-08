import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";

function Details() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie Not Available</h2>;

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} className="detail-img" />
      <p>{movie.description}</p>

      <Link to={`/booking/${movie.id}`} className="btn">
        Book Ticket
      </Link>
    </div>
  );
}

export default Details;
