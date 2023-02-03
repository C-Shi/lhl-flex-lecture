#### Collaboration with Git
Below is one of the git workflow you may want to follow, according to Compass [Git Collaboration](https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m06w14/activities/1281?workbook=25) exercise
* `git checkout main` and `git pull`: Your local main has everything that github main has
* `git checkout -b feature/login`: create a new branch and switch to that
* `git add .` and then `git commit -m 'message'`: Commit the work that you just done
* `git checkout main`: To switch back to your local main for merging
* `git merge feature/login`: merge the feature/login work to your current main branch
* `git pull` or `git merge origin/main` and fix potential conflict: update local main with github again
    - `git pull` and `git merge` work a bit different under the hood
    - But here if you do it right, the final result will be the same
* `git push origin main`: update github's main branch with your local work