@echo off
@title bat execute git auto commit
C:
cd C:/rest_countries
git add .
git commit -m "edit to rest countries"
git push -u origin main