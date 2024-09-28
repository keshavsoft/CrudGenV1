import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFromFile/ToadyQrAllReports.js';

let GetAllFuncs = () => {
    return ToadyQrAllReports();
};

let GetAsIsFuncs = () => {
    return ToadyQrAllReports();
};

export {
    GetAllFuncs, GetAsIsFuncs
};