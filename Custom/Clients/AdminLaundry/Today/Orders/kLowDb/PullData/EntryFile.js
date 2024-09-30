import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../CommonFuncs/ReturnDbObjectWithSchema.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncReturnDbObjectWithSchema();
    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = db.data;

    return LocalReturnData;
};

export { StartFunc };