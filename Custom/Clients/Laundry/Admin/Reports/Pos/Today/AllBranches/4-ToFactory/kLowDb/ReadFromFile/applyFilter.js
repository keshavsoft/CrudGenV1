import { StartFunc as buildData } from '../../../CommonFuncs/buildData.js';

let StartFunc = () => {
    const LocalQrCodeData = buildData();
    const LocalFilteredArray = LocalFilterData({ inQrcodeArray: LocalQrCodeData });
    // let jVarLocalTransformedData = jFLocalMergeFunc({ inQrData: Qrdb });
    let LocalArrayReverseData = LocalFilteredArray.slice().reverse();

    return LocalArrayReverseData;
};

const LocalFilterData = ({ inQrcodeArray }) => {
    const LocalFilteredArray = inQrcodeArray.filter(element => {
        return element.Status === true;
    });

    return LocalFilteredArray;
};

export { StartFunc };
