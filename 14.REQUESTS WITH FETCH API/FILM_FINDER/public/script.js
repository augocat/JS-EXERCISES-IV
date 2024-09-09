//FILM_FINDER
const tmdbKey = 'b24547544b5705d81413d9d9983ccdd4';
const tmdbBaseUrl = 'https://api.themoviedb.org/';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '3/genre/movie/list?';
  const requestParams = 'api_key=' + tmdbKey;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      const genres = jsonResponse.genres;
      //console.log(genres);
      return genres;
    }
  } catch (error) {
    
  }
};


const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '3/discover/movie';
  const requestParams = '?api_key=' + tmdbKey + '&genre=' + selectedGenre + '&sort_by=popularity%2Edesc';
  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      const movies = jsonResponse.results;
      // console.log(movies);
      return movies;
    }
  } catch (error) {
    
  }
};
//getMovies(); //DEBUGGING


const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = '3/movie/' + movieId;
  const requestParams = '?api_key=' + tmdbKey;
  const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const movieInfo = await response.json();
      //console.log(movieInfo);
      return movieInfo;
    }
  } catch (error) {
    
  }
};


// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  console.log(info);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;