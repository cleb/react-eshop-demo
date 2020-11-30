/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import createMiddleware from '@apidevtools/swagger-express-middleware';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const MemoryDataStore = createMiddleware.MemoryDataStore;
const Resource = createMiddleware.Resource;

const data = [
  {
    collection: '/products',
    name: 'Test1',
    data: { name: 'Test 1', id: 1, description: 'Lorem Ipsum' },
  },
  {
    collection: '/products',
    name: 'Test2',
    data: { name: 'Test 2', id: 2, description: 'Dolor Sit' },
  },
];

const port = process.env.port || 3333;

createMiddleware(`api.yml`, app, function (err, middleware) {
  const myDB = new MemoryDataStore();
  myDB.save(Resource.parse(data));

  app.use(
    middleware.metadata(),
    middleware.parseRequest(),
    middleware.validateRequest(),
    middleware.mock(myDB)
  );
  app.listen(port, function () {
    console.log(`API running on http://localhost:${port}`);
  });
});
