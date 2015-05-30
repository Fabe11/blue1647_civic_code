# Cheatsheet

These commands will work the same on Mac Terminal and Windows Powershell (but not Terminal). If you need a command that is not in here you can either Google for it(make sure you clearly express what you are trying to do and add your operating system), or you can ask me via email and I will update this file.

### git Commands

```git init```
Will initialize the folder you are currently on with git (= the changes you make in that folder will start being tracked with by the git program).

```git remote add origin https://github.com/your_username/your_repository_name.git```
Will connect the folder you are currently in on your local machine to the repository on GitHub.

```git add .```
Adds all the new file to the next commit.

```git commit -m"Your message here"
Commits the new files, with your custom message.

```git push origin master```
Will push your changes to GitHub, to the origin repository, on the master branch.
At this point, you will be prompted to input your GitHub username and password.

### Terminal / Powershell navigation

```cd ..```
Will change the directory to the one right above it.

```cd <directory_name>```
Will change the directory to the one whose name you passed.

```ls```
Will list all the files and folders in the current folder.