import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonDelete = "Delete";

import { StartFunc as home } from "./EndPointsContent/home.js";
import { StartFunc as Param } from "./EndPointsContent/Param.js";
import { StartFunc as Query } from "./EndPointsContent/Query.js";
import { StartFunc as ReferenceCheck } from "./EndPointsContent/ReferenceCheck.js";

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = `${CommonDelete}/restClients/DeleteEndPoints`;
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        home({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });
        Param({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });
        Query({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });
        ReferenceCheck({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });
    });
};

const LocalFuncWriteToHome = ({ inFrom, inTo }) => {
    let LocalFileData = `DELETE http://localhost:${inFrom}/${CommonDelete}/{inPkToBeDeleted}`;

    fs.writeFileSync(`${inTo}/home.http`, LocalFileData);
};

export { StartFunc };