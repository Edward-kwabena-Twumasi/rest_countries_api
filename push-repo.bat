@echo off
@title bat execute git auto commit
C:
cd C:/rest_countries
git add .
git commit -m "Rest countries api project"
git push -u origin main