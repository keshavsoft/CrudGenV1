import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFromFile/ToadyQrAllReports.js';

let GetAllFuncs = () => {
    return ToadyQrAllReports();
};

export {
    GetAllFuncs
};