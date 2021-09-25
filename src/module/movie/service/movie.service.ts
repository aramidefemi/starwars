import Http from '../../../utils/http.helper';

class MovieService {
  public static async fetchMovies() {
    try {
      return await Http.get('https://swapi.dev/api/films/');
    } catch (e) {
      return e;
    }
  }

  public static async fetchMovie(id: string) {
    try {
      return await Http.get(`https://swapi.dev/api/films/${id}`);
    } catch (e) {
      return e;
    }
  }
}
export default MovieService;
