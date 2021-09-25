import * as Sequelize from 'sequelize';
import { sequelize } from '../../../config/database/database';

const Comment = sequelize.define('comment', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  movieId: Sequelize.STRING,
  comment: Sequelize.STRING,
  ipAddress: Sequelize.STRING,
});

interface ICreateComment {
  _id?: number;
  movieId: string;
  comment: string;
  ipAddress: string;
}

interface IFindComment {
  _id?: number;
  movieId?: string;
}

class CommentService {
  public static async create(data: ICreateComment) {
    try {
      return await Comment.create(data);
    } catch (e) {
      return e;
    }
  }

  public static async groupByAndCount(path: string) {
    try {
      return await sequelize.query(
        'SELECT *, COUNT(`movieId`) as totalComment FROM `comments` GROUP By `movieId`',
      );
    } catch (e) {
      return e;
    }
  }

  public static async get(data: IFindComment) {
    try {
      return await Comment.findAll({
        where: { movieId: data.movieId },
        order: [['createdAt', 'DESC']],
      });
    } catch (e) {
      return e;
    }
  }
}
export default CommentService;
