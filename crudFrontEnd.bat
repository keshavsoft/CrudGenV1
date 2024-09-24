@echo off
set /p "datapk=Enter dataPk needed : "

del /p ..\crudFrontEnd\ColumnSchema\*.json
del /p ..\crudFrontEnd\TableSchema\*.json

rd /s ..\crudFrontEnd\src\AllTables\WithSSR\SubTableSideBar\SourceCode\HtmlFiles
rd /s ..\crudFrontEnd\src\AllTables\WithSSR\SubTableSideBar\SourceCode\Js\pages

@REM del /p ..\crudFrontEnd\src\AllTables\WithSSR\SubTableSideBar\SourceCode\HtmlFiles\*.html
@REM del /p /s ..\crudFrontEnd\src\AllTables\WithSSR\SubTableSideBar\SourceCode\Js\pages\*.*

xcopy ".\KCode\DataSchema\%datapk%\*.json" ..\crudFrontEnd\ColumnSchema
xcopy ".\KCode\TableSchema\%datapk%\*.json" ..\crudFrontEnd\TableSchema

cd ..\crudFrontEnd
call npm run buildATSubTableSideBar
xcopy .\publicDir\binATSubTableSideBar ..\CrudGenV1\public\binATSubTableSideBar /h /i /c /k /e /r /y
cd ..\CrudGenV1
