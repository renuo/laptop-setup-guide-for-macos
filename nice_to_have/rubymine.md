# RubyMine / Toolbox App

In this step we will install our main IDE (RubyMine).
Download the [Toolbox App](https://www.jetbrains.com/toolbox-app/) and install then RubyMine.
The Toolbox App gives you a list of all your projects.

Follow this [guide](https://www.jetbrains.com/help/ruby/working-with-the-ide-features-from-command-line.html#f9fe282c) to install the command line tools.
Then you can use the command `mine .` to open the current folder in RubyMine.

![](/toolbox_app_shellscript_location.png)

**If this fails**, you might want to change the permission of the `/usr/local/bin` folder, using following command:

```bash
sudo chown -R $(whoami) /usr/local/bin
```

**Useful RubyMine Plugins:**

- [GitLink](https://plugins.jetbrains.com/plugin/8183-gitlink/): links Files to Github so that you can open remotely on right-click.

**BetterErrors**

You can directly jump from [BetterErrors](https://github.com/BetterErrors/better_errors/wiki/Link-to-your-editor) to Rubymine
if you add this env variable to `.zshrc` (or `.zshenv`):

```sh
export BETTER_ERRORS_EDITOR=x-mine://open?file=%{file}&line=%{line}
```
