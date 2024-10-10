call npm i

@echo off
echo PORT=7019> .env
echo DataPk=327>> .env

call node KCode/ForBat/Backend.js
call node KCode/ForBat/Database.js
call npm run home
