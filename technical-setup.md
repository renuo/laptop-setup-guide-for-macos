---
outline: deep
---

# Basic Tools Setup

Now follows the part where it gets more technical. There's a convention at Renuo for the directory structure of projects. In every project you'll find the following files:

- For setting up the project: ``` bin/setup ```
- To run the tests: ``` bin/check ```
- to run and try the application: ``` bin/run ```

There are some requirements which need to be met first that this works. The following steps are going to prepare your system for that.

If you are experienced you can choose your own setup, but we recommend that you follow our setup instructions.

## Before you start

::: danger Important
Please read the following instructions carefully. If you don't follow them, you may run into problems.
:::

- **Sudo:** Coming from the Linux world, you're maybe used to the sudo command. On a Mac, you should seldom be required to use sudo.
- **Step by step:** Go through the guide page by page. Press the right arrow key to go to the next page.
Please don’t skip parts of this guide and don’t start with the next part or command if you haven’t finished the previous one. In general, the commands are only guaranteed to **work in the order of the guide** and cannot be parallelized.
- **Read and understand the command line outputs:** The installer will tell you useful / necessary hints, which may require action. Additionally, this guide may be partly outdated soon, which makes it even more important to read the outputs of the installers.
- **Discuss changes:** Please extend or correct this guide if you think the information is missing, wrong or outdated. Discuss the changes you want to make here with at least one other person before you make them.
- **Ask for help:** If you have any questions, please ask for help. We are happy to help you.


## Apple Developer and Xcode

### Apple Developer

Go to [Developer](https://developer.apple.com)

1. Click on "Account", login with your **Renuo** AppleID
2. Agree by checking boxes and submit

### Xcode

::: danger Warning
All System Updates must be installed before installing Xcode.
Xcode is necessary for all the following steps.
:::

1. Download Xcode from the App Store
2. Open Xcode and agree to license, then quit

While Xcode is installing, you can take a break and get a coffee ☕️.


## iTerm2 - Better macOS Terminal

We recommend you to use [iTerm2](https://iterm2.com/iTerm2) - macOS Terminal Replacement but you can freely choose your desired terminal application.


## Homebrew

::: danger Warning
Make sure you have installed Xcode and agreed to the license before installing Homebrew ― otherwise it will fail.
:::

Homebrew is a very convenient package manager for Mac. Go to [Brew](https://brew.sh/) and execute in the terminal what is written there (asks for sudo permissions). Afterwards run the following to keep your packages up-to-date:

- ``` brew update ```
- ``` brew upgrade ```


## Console Editor

### Vim

This is a highly configurable console editor which can be expected to be present on every Renuo system.

- ```brew install vim```

In the following sections we need to create and edit a lot of files. We will use Vim for this. If you are not familiar with Vim, you can use Visual Studio Code for example.

### Visual Studio Code (Recommended for Interns)

Download and install [Visual Studio Code](https://code.visualstudio.com/).

Once installed, open the command palette (⇧⌘P) and type `shell command` to find the Shell Command: "Install 'code' command in PATH command".

### How to

**Create a file**

```touch <filename>```

**Open a file**

```vim <filename>```
or
```code <filename>```

**Example**

```bash
touch .gitconfig


code .gitconfig
## or
vim .gitconfig
```


## ZSH

This is an alternative shell to bash (Mac standard).
It has some interesting features, a big community and its mechanisms are used in a wide range of scripts at Renuo.
You don't have to install it, but be aware that all configuration steps
below which involve `~/.zshrc` have to be customized to take into account the shell you're using.
There is already a version of zsh installed on your Mac, but it's probably old.
You can use homebrew to install a more recent one:

- ```brew install zsh```

Configure it as your login shell the following way:

1. Go to System Preferences
2. → Users & Groups
4. → Right click to your user
5. → Advanced Options
6. → Change Login-Shell to "/opt/homebrew/bin/zsh" to use the Homebrew zsh. (the old native one would be: "/bin/zsh")

### Plugins (optional)

For zsh there are several plugin systems. One of them is antigen. It's very flexible and you can use repositories like oh-my-zsh with it.

- ```brew install antigen```

**Do what it tells you to do** and try out some plugins [ZSH-Plugin Manager](https://github.com/zsh-users/antigen). For example you can put the following into your `~/.zshrc` to use oh-my-zsh:

- ```antigen use oh-my-zsh```
- ```antigen theme agnoster```
- ```antigen apply```


## git

This is a distributed versioning control system widely used. It's our standard.

- ```brew install git```

You can configure nice shortcuts in your console with the antigen bundles git, git-extras, git-flow.

### git config

Put the following into your: `~/.gitconfig`:

```bash
[user]
 name = <YOUR-FULL-NAME>
 email = <YOUR-EMAIL>@renuo.ch
[core]
 excludesfile = /Users/<YOUR-NAME>/.gitignore
```

#### Pulling strategy

> Pulling without specifying how to reconcile divergent branches is discouraged. You can squelch this message by running one of the following commands sometime before your next pull:

```
git config --global pull.rebase false     # merge (the default strategy)
```

```
git config --global pull.rebase true      # rebase
```

```
git config --global pull.ff only          # fast-forward only (the recommended strategy)
```

This will be reflected in  `~/.gitconfig`.

### git ignore

Put the following into your: `~/.gitignore`:

```bash
## Folder view configuration files
.DS_Store
Desktop.ini
.idea
*.iml

## Thumbnail cache files
._*
Thumbs.db

## Files that might appear on external disks
.Spotlight-V100
.Trashes
```


## Git Flow

[Git Flow](https://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) is a branching convention we use at Renuo. There is a tool which makes it more convenient to use:

- `brew install git-flow`


## GPG

This is a tool for public key crypto. There is also a tool called GPGSuite which has a GUI. You can use gpg to create your ssh key.

- ```brew install gpg```


## Setup SSH Key

An SSH key is a token which can be used to identify you and your machine. Everyone at our company has at least one. You can use this guide to create one:

Go to your GitHub settings and "Add a new SSH key".
Use 1Password to generate an ED25519 SSH key.

**SSH-Agent**

Follow the instructions on 1Password to use the 1Password SSH-Agent.
See also [1Password SSH Agent](https://blog.1password.com/1password-ssh-agent/)

**Git Commit Signing**

Setup signing your commits with 1Password.
See also [Git Commit Signing](https://blog.1password.com/git-commit-signing/)

**Add your public key to GitHub**

Once done, make a PR with the .pub file to [Renuo public keys](https://github.com/renuo/ssh-public.renuo.ch).
_The public key can be copied from 1Password_

::: info Tip
Clone the <a href="https://github.com/renuo/ssh-public.renuo.ch">ssh-public.renuo.ch</a> repository and create your first commit within the Renuo organization.

This will ensure that you have the correct permissions to push and correctly set up your SSH key. Your commits should be verified by GitHub.
:::

## asdf

[asdf](https://asdf-vm.com/) Manage multiple runtime versions with a single CLI tool:

- ```brew install asdf```

Put the following into your: `~/.zshrc`:

- ```. $(brew --prefix asdf)/libexec/asdf.sh```

Now you can install ruby and node:

- ```asdf plugin add ruby```
- ```asdf plugin add nodejs```

And then:

- ```asdf install ruby latest```
- ```asdf install nodejs latest```

To add a global ruby add:

- ```asdf global ruby latest```

To support .ruby-version add this to your `~/.asdfrc`

- ```legacy_version_file = yes```

See also [Guide](https://asdf-vm.com/guide/getting-started.html#using-existing-tool-version-files)


## yarn

Yarn is a package manager for node packages.

- ```brew install yarn --ignore-dependencies```


## postgresql

Postgres is the main database we use for our projects. Install it and configure it to be started automatically:

- ```brew install postgresql```
- ```brew services start postgresql```


## Redis

Redis is used for ActionCable in Rails 5.2 and other projects with Sidekiq. You can use homebrew to install it:

- ``` brew install redis ```

After the installation run through, you will get a command to start redis:

- ``` brew services restart redis ```


## Heroku CLI

To add the Heroku CLI, please use the following command.

- ```brew tap heroku/brew && brew install heroku```


## Renuo CLI

To add the Renuo CLI, please use the following command.

- `cd ~`
- `asdf global ruby latest`
- `gem install renuo-cli`


## Important Homebrew Apps

### Shared MIME Info

See [Guide](https://github.com/mimemagicrb/mimemagic)

- ```brew install shared-mime-info```
- ```brew install imagemagick```

### MySQL

- ``` brew install mysql ```
- ``` brew install zstd ```

### PDFtk

- ``` brew install pdftk-java ```


## Congratulations 🥳

You are now ready to start working with the Renuo stack.

One last thing to do is to verify that everything is working.

### Verify the Setup

Now you should be able to clone any project from the Renuo GitHub and start up the website.

To verify this:

1. Clone a project. e.g.: [Gifcoins2](https://github.com/renuo/gifcoins2)
2. Use: ```bin/setup```
3. Use: ```bin/run```

Open the website in Google Chrome and check if everything is working.
