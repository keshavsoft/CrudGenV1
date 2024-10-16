import { StartFunc as applyFilter } from '../../kLowDb/ReadFromFile/applyFilter.js';

let GetAllFuncs = () => {
    return applyFilter();
};

export {
    GetAllFuncs
};