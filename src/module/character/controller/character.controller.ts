import HttpStatus from 'http-status-codes';
import async from 'async';
import { Request, Response } from 'express';
import * as message from '../message/character.message';
import ResponseHandler from '../../../utils/responseHandler';
import CharacterService from '../service/character.service';
import MovieService from '../../movie/service/movie.service';
import { toFt } from '../helper/height';

class CharacterController {
  public fetchMovieCharacterList = async (req: Request, res: Response) => {
    const { sortby, gender } = req.query;

    const payload = await MovieService.fetchMovie(req.params.episode_id);

    const characterDetailAPI = payload.data.characters.map(
      (item: string) => async (callback: any) => {
        const result = await CharacterService.fetchCharacter(item);
        callback(null, {
          totalHeight: toFt(result.data.height),
          height: `${result.data.height} cm`,
          name: result.data.name,
          gender: result.data.gender,
        });
      },
    );

    async.parallel(characterDetailAPI, (err: any, result: any) => {
      if (err)
        return ResponseHandler.ErrorResponse(
          res,
          HttpStatus.BAD_REQUEST,
          message.MSG_LIST_FETCH_NOT_SUCCESSFUL,
        );
      let characters = result;

      if (gender)
        characters = characters.filter((item: any) => item.gender === gender);

      if (sortby)
        characters = characters.sort((a: any, b: any) => {
          if (a[sortby.toString()] < b[sortby.toString()]) {
            return -1;
          }
          if (a[sortby.toString()] > b[sortby.toString()]) {
            return 1;
          }
          return 0;
        });

      return ResponseHandler.SuccessResponse(
        res,
        HttpStatus.OK,
        message.MSG_LIST_FETCH_SUCCESSFUL,
        characters,
      );
    });
  };
}
export default CharacterController;
