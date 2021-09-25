import { Application } from 'express';
import resolver from '../../../utils/resolver';
import MovieController from '../controller/movie.controller';
import { MOVIES_URL } from '../movie.url';

class MovieRoute {
  public movieController: MovieController = new MovieController();

  public routes = (app: Application): void => {
    app.route(MOVIES_URL).get(resolver(this.movieController.fetchMovies));
  };
}
export default MovieRoute;
