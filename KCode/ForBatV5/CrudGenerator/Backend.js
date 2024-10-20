import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";
import { StartFunc as ForBackendV5 } from './ForBackendV5/EntryFile.js';
import { StartFunc as ForBackendV5Secured } from './ForBackendV5Secured/EntryFile.js';

let StartFunc = ({ inFilesArray, inEndPointsNeeded }) => {
    let LocalFilesArray = inFilesArray;
    let LocalEndPointsNeeded = inEndPointsNeeded;

    StartFuncPrepareReadColumnsData({ inTableData: LocalFilesArray });

    LocalFuncForBackEndv5({
        inFilesArray: LocalFilesArray,
        inEndPointsNeeded: LocalEndPointsNeeded
    });

    LocalFuncForBackEndv5Secured({ inFilesArray: LocalFilesArray });
};

let LocalFuncForBackEndv5 = ({ inFilesArray, inEndPointsNeeded }) => {
    let LocalEndPointsNeeded = inEndPointsNeeded;
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src/BackEndv5";
    let CommonTo = "binV4";

    ForBackendV5({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo,
        inEndPointsNeeded: LocalEndPointsNeeded
    });

    console.log(`Generated the endpoints in backend : ${CommonTo}`);
};

let LocalFuncForBackEndv5Secured = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src/BackEndv4";
    let CommonTo = "binV5Secured";

    ForBackendV5Secured({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });

    console.log(`Generated the endpoints in backend : ${CommonTo}`);
};

export { StartFunc };
