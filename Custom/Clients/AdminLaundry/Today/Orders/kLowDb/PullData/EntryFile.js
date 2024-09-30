import { StartFunc as ANR } from '../CommonFuncs/ANR.js';
import { StartFunc as CSO } from '../CommonFuncs/CSO.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = [
        ...ANR(),
        ...CSO()
    ];

    return LocalReturnData;
};

export { StartFunc };