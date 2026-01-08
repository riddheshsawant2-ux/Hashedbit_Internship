import movies from "../data/movies";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Movies</h1>
      
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
