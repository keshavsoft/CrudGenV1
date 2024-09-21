import {
    GetRowDataFunc as GetRowDataFuncDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetRowDataFunc = ({ inBranch, inId }) => {
    return GetRowDataFuncDal({ inBranch, inId });
};

export {
    GetRowDataFunc
};