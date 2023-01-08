import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import swaggerUi from 'swagger-ui-express'

import { router } from './routes';
import { CustomErrors } from './errors/CustomErrors';
import swaggerFile from './swagger.json'
import './modules/students/typeorm/repositories'
import './database'

const app = express();

app.use(express.json());

app.use('/', router)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use((
  err: Error,
  request: express.Request,
  response: express.Response,
  _next: express.NextFunction
) => {
  if (err instanceof CustomErrors) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message} `,
  });
}
);

export { app }