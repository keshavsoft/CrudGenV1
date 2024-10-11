@echo off
echo PORT=7019> .env
echo DataPk=318>> .env

call node KCode/ForBat/Backend.js
call node KCode/ForBat/Database.js
call npm run home

npm run start
