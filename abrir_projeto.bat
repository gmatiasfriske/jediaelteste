@echo off
setlocal
echo Preparando o ambiente...
echo Iniciando o servidor de desenvolvimento...
start "" "http://localhost:5173"
npm run dev
pause
