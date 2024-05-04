import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";

// API Key e1a76ee6

const API_URL = "http://www.omdbapi.com?apikey=e1a76ee6";

const App = () => {

    const movie1 = {
        "Title": "The Amazing Spiderman 2 Webb Cut",
        "Year": "2021",
        "imdbID": "tt18351128",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
    }

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for a movie"
          value="Superman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="search icon" onClick={() => {}}/> 
      </div>
      <div className="container">
        <div className="movie">
            <div>
                <p>{movie1.Year}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
