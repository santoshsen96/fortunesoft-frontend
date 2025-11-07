import MovieCard from './MovieCard';
import "../styles/CategoryCard.css";

export default function CategoryCard({ category }) {
  return (
    <section className="category">
      <h2 className="category-title">{category.category}</h2>
      <div className="movies-grid">
        {category.movies.map(m => (
          <MovieCard key={m.slug} movie={m} />
        ))}
      </div>
    </section>
  );
}
