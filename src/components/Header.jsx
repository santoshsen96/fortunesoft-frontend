import React from "react";
import "../styles/Header.css";


const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h1 className="logo">WOOKIE MOVIES</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>
    </header>
  );
};

export default Header;
