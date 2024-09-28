import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';

let GetFunc = () => {
    return StartFuncPullData();
};

let GetNotEmptyFunc = () => {
    return StartFuncPullData();
};

export { GetFunc, GetNotEmptyFunc };