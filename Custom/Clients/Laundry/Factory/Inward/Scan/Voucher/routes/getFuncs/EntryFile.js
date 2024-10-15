import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/:inFactory', GetFilterFactoryFunc);
router.get('/QrStatus/:inFactory', GetQrStatusFunc);

export { router };