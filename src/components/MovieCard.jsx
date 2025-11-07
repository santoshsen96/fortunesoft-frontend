import "../styles/MovieCard.css";
export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="poster"/>
      <div className="movie-info">
        <h4 className="title">{movie.title}</h4>
        <p className="director">Director: {movie.director}</p>
        <p className="meta">Rating: {movie.imdb_rating || 'N/A'} • {movie.length}</p>
      </div>
    </div>
  );
}
