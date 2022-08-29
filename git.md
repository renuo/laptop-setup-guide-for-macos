# git

This is a distributed versioning control system widely used. It's our standard.

- ```brew install git```

You can configure nice shortcuts in your console with the antigen bundles git, git-extras, git-flow.

## git config

Put the following into your: `.gitconfig`:
_(to do so use Visual Studio Code `open ~/.gitconfig -a Visual\ Studio\ Code.app` or Vim. If the file does not exist use `touch ~/.gitconfig`)_

```bash
[user]
 name = <YOUR-FULL-NAME>
 email = <YOUR-EMAIL>@renuo.ch
[core]
 excludesfile = /Users/<YOUR-NAME>/.gitignore
```

> Pulling without specifying how to reconcile divergent branches is discouraged. You can squelch this message by running one of the following commands sometime before your next pull: 

```
git config pull.rebase false     # merge (the default strategy) 
```
```
git config pull.rebase true      # rebase 
```
```
git config pull.ff only          # fast-forward only 
```

## git ignore

Put the following into your: `.gitignore`:
_(to do so use Visual Studio Code `open ~/.gitignore -a Visual\ Studio\ Code.app` or Vim. If the file does not exist use `touch ~/.gitignore`)_

```bash
# Folder view configuration files
.DS_Store
Desktop.ini
.idea
*.iml

# Thumbnail cache files
._*
Thumbs.db

# Files that might appear on external disks
.Spotlight-V100
.Trashes
```
