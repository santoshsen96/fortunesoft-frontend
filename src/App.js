import React, { useState } from "react";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import { MovieProvider } from "./context/MovieContext";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <MovieProvider searchTerm={search}>
      <div className="app">
        <Header onSearch={setSearch} />
        <CategoryList />
      </div>
    </MovieProvider>
  );
};

export default App;
