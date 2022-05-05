# asdf

[asdf](https://asdf-vm.com/) Manage multiple runtime versions with a single CLI tool:

- ```brew install asdf```

Put the following into your: .zshrc:

- ```. $(brew --prefix asdf)/libexec/asdf.sh```

Now you can install ruby and node:

- ```asdf plugin add ruby```
- ```asdf plugin add nodejs```

And then:

- ```asdf install ruby 3.0.2```
- ```asdf install nodejs 16.13.2```

To add a global ruby add:

- ```asdf global ruby 3.0.2```

To support .ruby-version add this to your ~/.asdfrc

- ```legacy_version_file = yes```

See also [Guide](https://asdf-vm.com/guide/getting-started.html#using-existing-tool-version-files)
