import HttpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import * as message from '../message/comment.message';
import ResponseHandler from '../../../utils/responseHandler';
import CommentService from '../service/comment.service';

class CommentController {
  public createComments = async (req: Request, res: Response) => {
    const ipAddress = req.ip || req.socket.remoteAddress;
    const movieId = req.params.episode_id;
    const comment = await CommentService.create({
      comment: req.body.comment,
      movieId,
      ipAddress,
    });
    if (comment) {
      return ResponseHandler.SuccessResponse(
        res,
        HttpStatus.CREATED,
        message.MSG_ADD_COMMENT_SUCCESSFUL,
        comment,
      );
    }
    return ResponseHandler.ErrorResponse(
      res,
      HttpStatus.BAD_REQUEST,
      message.MSG_ADD_COMMENT_NOT_SUCCESSFUL,
    );
  };

  public fetchComments = async (req: Request, res: Response) => {
    const comment = await CommentService.get({
      movieId: req.params.episode_id,
    });
    if (comment) {
      return ResponseHandler.SuccessResponse(
        res,
        HttpStatus.OK,
        message.MSG_LIST_FETCH_SUCCESSFUL,
        comment,
      );
    }
    return ResponseHandler.ErrorResponse(
      res,
      HttpStatus.BAD_REQUEST,
      message.MSG_LIST_FETCH_NOT_SUCCESSFUL,
    );
  };
}
export default CommentController;
