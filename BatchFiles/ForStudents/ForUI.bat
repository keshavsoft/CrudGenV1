@echo off
cd ..\crudFrontEnd

call npm run TableShowJs

xcopy .\publicDir\TableShowFromJs ..\CrudGenV1\public\Students\TableShowFromJs /h /i /c /k /e /r /y


cd ..\FrontEndForClients

call npm run students

xcopy .\publicDir\Students ..\CrudGenV1\public\Students /h /i /c /k /e /r /y