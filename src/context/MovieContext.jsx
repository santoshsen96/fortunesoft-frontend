import React, { createContext, useEffect, useState } from "react";
import { fetchMovies } from "../services/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children, searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    loadMovies();
  }, []);

  const filteredMovies = movies
    .map((cat) => ({
      ...cat,
      movies: cat.movies.filter((m) =>
        m.title?.toLowerCase().includes(searchTerm || "".toLowerCase())
      ),
    }))
    .filter((cat) => cat.movies.length > 0);

  return (
    <MovieContext.Provider value={{ movies: filteredMovies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
