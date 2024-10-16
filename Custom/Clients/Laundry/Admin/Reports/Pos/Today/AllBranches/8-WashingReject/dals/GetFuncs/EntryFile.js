// import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFileList/ToadyQrAllReports.js';
import { StartFunc as applyFilter } from '../../kLowDb/ReadFromFile/applyFilter.js';

let GetAllFuncs = () => {
    return applyFilter();
    // return ToadyQrAllReports({ inBranch });
};

export {
    GetAllFuncs
};