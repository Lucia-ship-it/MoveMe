@echo off
rem Opens MoveMe in its own window (no browser tabs or address bar)
start "" msedge --app="%~dp0MoveMe.html" --window-size=1050,820
