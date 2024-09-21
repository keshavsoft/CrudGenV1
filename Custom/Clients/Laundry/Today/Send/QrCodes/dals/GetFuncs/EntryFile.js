import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';

let GetRowDataFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inBranch, inId });

    return LocalFromLowDb;
};

export {
    GetRowDataFunc
};