@echo off

call npm run fix

git add *
git commit -m update
git push