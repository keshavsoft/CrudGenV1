import { StartFunc as GetVoucher } from '../../kLowDb/ReadFromApi/GetVoucher.js';
import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFileList/GetVoucherQrStatus.js';

let GetFunc = () => {
    return GetVoucher();
};

let GetFilterFactoryFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

export {
    GetFunc, GetFilterFactoryFunc, GetQrStatusFunc
};