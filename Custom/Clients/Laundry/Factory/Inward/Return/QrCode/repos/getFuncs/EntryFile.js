import {
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
    GetRowCountFunc as GetRowCountFuncDal
} from '../../dals/getFuncs/EntryFile.js';


let GetRowDataFunc = ({ inFactory, inId }) => {
    return GetRowDataFuncDal({ inFactory, inId });
};

let GetRowQrDataFunc = ({ inId }) => {
    return GetRowQrDataFuncDal({ inId });
};

let GetRowCountFunc = ({ inId }) => {
    return GetRowCountFuncDal({ inId });
};

export {
    GetRowDataFunc, GetRowQrDataFunc, GetRowCountFunc
};