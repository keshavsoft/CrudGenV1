@echo off

cd ..\crudFrontEnd
call npm run TableShow
xcopy .\publicDir\TableShow ..\CrudGenV1\public\TableShow /h /i /c /k /e /r /y
cd ..\CrudGenV1
