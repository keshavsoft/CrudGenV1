import express from 'express';

var router = express.Router();

import { router as QrCodes } from './QrCodes/routes.js';
import { router as Orders } from './Orders/routes.js';

router.use('/QrCodes', QrCodes);
router.use('/Orders', Orders);

export { router };