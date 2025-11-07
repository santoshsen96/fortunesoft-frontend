import React, { createContext, useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import { useDebounce } from "../hooks/useDebounce";

export const MovieContext = createContext();

export const MovieProvider = ({ children, searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(searchTerm, 400);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMovies();
        const filtered = data
          .map((cat) => ({
            ...cat,
            movies: cat.movies.filter((m) =>
              m.title?.toLowerCase().includes(debouncedSearch.toLowerCase())
            ),
          }))
          .filter((cat) => cat.movies.length > 0);

        setMovies(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    loadMovies();
  }, [debouncedSearch]);

  return (
    <MovieContext.Provider value={{ movies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
