git init
git add -A
git commit -m "my latest"

git remote add origin https://github.com/ajinkyachavan/ajinkyachavan.github.io
git fetch origin

git reset origin/master

git add -A
git commit -m "Committed my state"

git push -u origin master
