import HttpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import * as message from '../message/movie.message';
import ResponseHandler from '../../../utils/responseHandler';
import MovieService from '../service/movie.service';
import CommentService from '../../comment/service/comment.service';

class MovieController {
  public fetchMovies = async (req: Request, res: Response) => {
    const payload = await MovieService.fetchMovies();
    const rawCommentsCount = await CommentService.groupByAndCount('movieId');
    const commentsCount = rawCommentsCount[0];

    const movies = payload?.data?.results
      .sort((a: any, b: any) => {
        return (
          new Date(b.release_date).getFullYear() -
          new Date(a.release_date).getFullYear()
        );
      })
      .map((item: any) => {
        const comment = commentsCount.filter(
          (commentItem: any) => commentItem.movieId === item.episode_id,
        );

        return {
          release_date: item.release_date,
          opening_crawl: item.opening_crawl,
          episode_id: item.episode_id,
          title: item.title,
          comments: comment[0]?.totalComment || 0,
        };
      });

    if (movies) {
      return ResponseHandler.SuccessResponse(
        res,
        HttpStatus.CREATED,
        message.MSG_LIST_FETCH_SUCCESSFUL,
        movies,
      );
    }
    return ResponseHandler.ErrorResponse(
      res,
      HttpStatus.BAD_REQUEST,
      message.MSG_LIST_FETCH_NOT_SUCCESSFUL,
    );
  };
}
export default MovieController;
