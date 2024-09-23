import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/QrCodes.js';

let StartFunc = ({ inBranch }) => {
    // let LocalFindValue = "02/09/2024";
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    let LocalBranchName = inBranch;
    let LocalReturnData = { KTF: false }

    const Orderdb = StartFuncCommonFuncs();
    Orderdb.read();

    let LocalFilterBranchData = Orderdb.data.filter(e => {
        return new Date(e.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue && e.BookingData.OrderData.BranchName === LocalBranchName;
    })
        .map(e => {
            return {
                OrderNumber: e.GenerateReference.ReferncePk, // example key
                QrCode: e.pk,
                ItemName: e.ItemName,
                Rate: e.Rate,
                DeliveryDate: new Date(e.DeliveryDateTime).toLocaleDateString('en-GB'),
                OrderDate: new Date(e.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
                // Add more keys as needed
            };
        });

    if (LocalFilterBranchData.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFilterBranchData.slice().reverse();

    return LocalReturnData;
};

export { StartFunc };
