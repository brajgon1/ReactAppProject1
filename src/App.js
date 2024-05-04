import { useEffect } from 'react';

// API Key e1a76ee6

const API_URL = 'http://www.omdbapi.com?apikey=e1a76ee6'

const App = () => {

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search);
}

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <div>
            <h1>App</h1>
        </div>
    );
}

export default App;