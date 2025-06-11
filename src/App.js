import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//key: 48b5573c
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=48b5573c";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (searchTerm) => {
    const response = await fetch(`${API_URL}&s=${searchTerm}`);
    const data = await response.json();
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      console.error("Error fetching movies:", data.Error);
    }
  };

  useEffect(() => {
    // Initial fetch to display some movies when the app loads
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Gallery</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            if (searchText.trim().length >= 3) {
              searchMovies(searchText);
            } else {
              console.warn("Please enter a search term");
            }
          }}
        />
      </div>

      <div className="container">
        {movies && movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} id={movie.imdbID} />
          ))
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
