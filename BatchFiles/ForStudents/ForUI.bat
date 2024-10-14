@echo off
cd ..\..\..\crudFrontEnd

call npm run TableShowJs

xcopy .\publicDir ..\CrudGenV1\public\Students /h /i /c /k /e /r /y
