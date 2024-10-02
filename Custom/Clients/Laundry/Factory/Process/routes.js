import express from 'express';

var router = express.Router();

import { router as Washing } from './Washing/routes.js';

router.use('/Washing', Washing);

export { router };