import { Application } from 'express';
import resolver from '../../../utils/resolver';
import CommentController from '../controller/comment.controller';
import { MOVIE_COMMENTS_URL, MOVIE_COMMENT_URL } from '../comment.url';
import { validateComment } from '../validation/comment.validation';

class CommentRoute {
  public commentController: CommentController = new CommentController();

  public routes = (app: Application): void => {
    app
      .route(MOVIE_COMMENT_URL)
      .post(validateComment, resolver(this.commentController.createComments));

    app
      .route(MOVIE_COMMENTS_URL)
      .get(resolver(this.commentController.fetchComments));
  };
}
export default CommentRoute;
