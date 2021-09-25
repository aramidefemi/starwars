import { connection } from 'mongoose';
import database from '../../src/config/database/database';

const setupTestDB = () => {
  beforeAll((done) => {
    const { collections } = connection;
    Object.keys(collections).forEach((e) => {
      const collection = collections[e];
      collection.deleteMany({});
    });
    database
      .connectToDb()
      .then(() => {
        connection.db.dropDatabase(() => {
          done();
        });
      })
      .catch(() => done());
  });
  afterAll(async () => {
    await connection.close();
  });
};

export default setupTestDB;
