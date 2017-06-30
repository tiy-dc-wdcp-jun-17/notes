# How To Submit Projects To Github

## Make Sure Your Computer Is Setup

See [01-one-time-setup.md](01-one-time-setup.md).

## Create Initial Git Commit

1. Download the `.zip` file from the project page.
2. Extract the `.zip` file contents.
3. Rename (`mv`) the project directory to something simple, such as
   `puppy_love` or `isoda`.
4. Move (`mv`) the project directory to `~/code/`.
5. Change (`cd`) to the project directory.
6. Initialize git only once.

```sh
git init
```

`git init` creates a `.git` directory in your project directory. You
can list the `.git` directory with:

```sh
ls -a
```

7. Add all the files.

```sh
git add .
```

You can check the above command with:

```sh
git status
```

8. Make the initial commit.

```sh
git commit -m 'Initial commit'
```

You can check the above command with:

```sh
git log
# Press 'q' to exit if needed
```

## Create Github Project

1. Create a Github project with the same name as the project
   directory, such as `puppy_love` or `isoda`.
2. Add the Github git remote.

```sh
git remote add origin https://github.com/<user_name>/<project_name>.git
```

You can check the above command with:

```sh
git remote -v
```

3. Push the project repository from the command line to Github.

```sh
git push -u origin master
```

## Add And Commit Changes

When you add a feature or fix something, that's usually a good moment
to do a git commit. You may do a git commit multiple times.

1. Make changes to your project.
2. `git add <file>` or `git add <file1> <file2> <file3>`.
3. `git commit -m 'Your commit message'`

## Push Changes To Github

```sh
git push
```

Please push to Github often. Multiple git commits get pushed to Github
with a single `git push`.

### Etiquette for Git Commit Messages

Git commit messages should be present tense and start with an action
word.

Example action words:

* Add
* Create
* Update
* Fix
* Remove

Example commit messages:

* "Add header styling"
* "Fix main content layout"
* "Remove extraneous files"

### Reminders

* Do not add extraneous files, such as `.DS_Store`.
