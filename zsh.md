# zsh 

This is an alternative shell to bash (Mac standard). It has some interesting features, a big community and its mechanisms are used in a wide range of scripts at Renuo. You don't have to install it, but be aware that all configuration steps below which involve .zshrc have to be customized to take into account the shell you're using. There is already a version of zsh installed on your Mac, but it's probably old. You can use homebrew to install a more recent one:

- ```brew install zsh```

Configure it as your login shell the following way:

1. Go to System Preferences
2. → Users & Groups
3. → Click the lock
4. → Right click to your user
5. → Advanced Options
6. → Change Login-Shell to "/opt/homebrew/bin/zsh" to use the Homebrew zsh. (the old native one would be: "/bin/zsh")

## Plugins (optional) 

For zsh there are several plugin systems. One of them is antigen. It's very flexible and you can use repositories like oh-my-zsh with it.

- ```brew install antigen```

**Do what it tells you to do** and try out some plugins [ZSH-Plugin Manager](https://github.com/zsh-users/antigen). For example you can put the following into your .zshrc to use oh-my-zsh:

- ```antigen use oh-my-zsh```
- ```antigen theme agnoster```
- ```antigen apply```
