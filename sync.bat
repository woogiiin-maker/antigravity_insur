@echo off
chcp 65001 > nul
echo ========================================================
echo   GitHub 자동 동기화 (Auto-Sync)
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0auto_sync.ps1"
echo.
echo 동기화 완료! 3초 후 자동으로 닫힙니다...
timeout /t 3 > nul
