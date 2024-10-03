@echo off
echo PORT=7019> .env
echo DataPk=327>> .env

call node KCode/ForBat/Backend.js
call node KCode/ForBat/Database.js
call npm run home

cd ..\LaundryFrontEnd

call npm run WashtexBranch
call npm run BranchToday
call npm run TodayReports
call npm run Masters
call npm run ToFactory
call npm run NewOrders
call npm run CustomersToOrders
call npm run Main
call npm run BranchAll
call npm run AllReports
call npm run Today-QrCodes
call npm run Today-Orders
call npm run AdminToday-QrCodes
call npm run AdminToday-Orders

xcopy .\publicDir ..\CrudGenV1\public\Laundry /h /i /c /k /e /r /y

cd ..\FRONTENDMAZERVITE

call npm run FromBranchVoucher
call npm run FromBranchQrCodes
call npm run FromEntryVoucher
call npm run FromEntryQrCodes

xcopy .\publicDir ..\CrudGenV1\public\Factory /h /i /c /k /e /r /y


cd ..\crudFrontEnd

call npm run Dashboard

xcopy .\publicDir ..\CrudGenV1\public\crudFrontEnd /h /i /c /k /e /r /y

cd ..\FrontEndForUsers

call npm run Users

xcopy .\publicDir\LoginUsers ..\CrudGenV1\public\LoginUsers /h /i /c /k /e /r /y


cd ..\CrudGenV1
