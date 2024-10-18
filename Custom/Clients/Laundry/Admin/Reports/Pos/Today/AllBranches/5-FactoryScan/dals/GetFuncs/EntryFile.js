import { StartFunc as entryFile } from '../../kLowDb/ReadFromFile/entryFile';

let GetAllFuncs = () => {
    return entryFile();
};

export {
    GetAllFuncs
};