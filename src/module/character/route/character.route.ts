import { Application } from 'express';
import resolver from '../../../utils/resolver';
import CharacterController from '../controller/character.controller';
import { MOVIE_CHARACTERS_URL } from '../character.url';

class CharacterRoute {
  public characterController: CharacterController = new CharacterController();

  public routes = (app: Application): void => {
    app
      .route(MOVIE_CHARACTERS_URL)
      .get(resolver(this.characterController.fetchMovieCharacterList));
  };
}
export default CharacterRoute;
