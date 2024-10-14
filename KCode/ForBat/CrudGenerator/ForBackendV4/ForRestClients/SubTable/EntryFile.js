import { StartFunc as Show } from "./Show/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    Show({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };