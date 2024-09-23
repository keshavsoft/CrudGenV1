import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;

    let LocalFromRepo = GetFuncRepo({ inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) res.Status(500).send(LocalFromRepo.KReason);

    res.Status(200).json(LocalFromRepo.JsonData);
};

export { GetFunc };