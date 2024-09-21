import {
    GetRowDataFunc as GetRowDataFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowDataFuncRepo({ inBranch: LocalinBranch, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

export {
    GetRowDataFunc
};