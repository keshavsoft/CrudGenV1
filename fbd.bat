@echo off
echo PORT=7019> .env

call node KCode/Backend.js
call node KCode/Database.js
call npm run home
