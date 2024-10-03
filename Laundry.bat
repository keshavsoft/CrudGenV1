@echo off

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
