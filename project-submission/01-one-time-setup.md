# One-Time Setup

## Make the "~/code" directory

```sh
mkdir ~/code
```

## Set your git user and email

`~/.gitconfig` file contents should include:

```text
[user]
	name = FirstName LastName
	email = your_name@domain.com
```

This git configuration can be added with:

```sh
git config --global user.name 'your_name'
git config --global user.email 'your_name@domain.com'
```

To check if your name and email were added to your git commit
successfully:

```sh
cd ~/code/<project_name>
git log
```

## Do not submit ".DS_Store" files

`~/.gitignore_global` file contents should include:

```text
.DS_Store
```

This file can be created/edited with:

```sh
atom ~/.gitignore_global
```

`~/.gitconfig` file contents should include:

```text
[core]
	excludesfile = /Users/<user_name>/.gitignore_global
```

This git configuration can be added with:

```sh
git config --global core.excludesfile ~/.gitignore_global
```
