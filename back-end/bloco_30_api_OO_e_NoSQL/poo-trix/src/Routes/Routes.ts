import { Router } from 'express';
import TransferController from '../Controllers/TransferController';
import KeyController from '../Controllers/KeyController';

const routes = Router();

routes.post(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).create(),
);

routes.patch(
  '/transfer/:id', 
  (req, res, next) => new TransferController(req, res, next).reversalRequest(),
);

routes.get(
  '/transfer', 
  (req, res, next) => new TransferController(req, res, next).getAll(),
);

routes.get(
  '/transfer/:key', 
  (req, res, next) => new TransferController(req, res, next).getByKey(),
);

routes.post(
  '/key/register',
  (req, res, next) => new KeyController(req, res, next).create(),
);

routes.get(
  '/key/:owner',
  (req, res, next) => new KeyController(req, res, next).getAllByOwner(),
);

export default routes;