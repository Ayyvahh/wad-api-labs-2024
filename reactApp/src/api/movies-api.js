export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=45e565309cfb543718429e19be05b227&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };