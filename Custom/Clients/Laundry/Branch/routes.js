import express from 'express';

var router = express.Router();

import { router as routerFromEntry } from './Entry/routes.js';

router.use('/Entry', routerFromEntry);

export { router };