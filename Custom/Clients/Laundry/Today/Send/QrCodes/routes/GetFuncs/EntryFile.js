import express from 'express';

var router = express.Router();

import {
    GetRowDataFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/RowData/:id/:inBranch', GetRowDataFunc);


export { router };