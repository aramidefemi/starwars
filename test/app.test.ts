import HttpStatus from 'http-status-codes';
import request from 'supertest';
import app from '../src/app';

describe('home', () => {
  it('appropriate message', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).toEqual(HttpStatus.OK);
        expect(res.text).toEqual('Hello! Welcome!');
        done();
      });
  });
});
