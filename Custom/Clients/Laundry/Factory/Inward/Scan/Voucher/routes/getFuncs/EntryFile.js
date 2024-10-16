import express from 'express';

var router = express.Router();

import {
    GetFunc, GetFilterFactoryFunc, GetQrStatusFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/QrStatus/:inFactory', GetQrStatusFunc);

export { router };