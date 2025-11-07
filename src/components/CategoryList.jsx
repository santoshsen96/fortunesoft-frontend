import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import CategoryCard from "./CategoryCard";
import "../styles/CategoryList.css";

export default function CategoryList() {
  const { movies, loading } = useContext(MovieContext);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div>
      {movies.map(cat => (
        <CategoryCard key={cat.category} category={cat} />
      ))}
    </div>
  );
}
