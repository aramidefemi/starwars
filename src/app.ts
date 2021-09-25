import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import CommentRoute from './module/comment/route/comment.route';
import MovieRoute from './module/movie/route/movie.route';
import CharacterRoute from './module/character/route/character.route';


dotenv.config();

class App {
  public app: express.Application;

  public commentRoute: CommentRoute = new CommentRoute();

  public movieRoute: MovieRoute = new MovieRoute();

  public characterRoute: CharacterRoute = new CharacterRoute();

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.config();
    this.commentRoute.routes(this.app);
    this.movieRoute.routes(this.app);
    this.characterRoute.routes(this.app);
    this.app.disable('x-powered-by');
    this.app.get('/', (req, res) => res.send('Hello! Welcome!'));
  }

  private config = (): void => {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());
  };
}

export default new App().app;
