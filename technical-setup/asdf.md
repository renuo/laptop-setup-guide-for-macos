# asdf

[asdf](https://asdf-vm.com/) Manage multiple runtime versions with a single CLI tool:

- ```brew install asdf```

Put the following into your: `.zshrc`:
_(to do so use Visual Studio Code `open ~/.zshrc -a Visual\ Studio\ Code.app` or Vim. If the file does not exist use `touch ~/.zshrc`)_

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