# RubyMine / Toolbox App

In this step we will install our main IDE (RubyMine).
Download the [Toolbox App](https://www.jetbrains.com/toolbox-app/) and install then RubyMine.
The Toolbox App gives you a list of all your projects.

Follow this [guide](https://www.jetbrains.com/help/ruby/working-with-the-ide-features-from-command-line.html#f9fe282c) to install the command line tools.
Then you can use the command `mine .` to open the current folder in RubyMine.

<img src="/img/toolbox_app_shellscript_location.png" style="width: 100%; max-width: 500px;">

**If this fails**, you might want to change the permission of the `/usr/local/bin` folder.

```bash
sudo chown -R $(whoami) /usr/local/bin
```

**Useful RubyMine Plugins:**

- [GitLink](https://plugins.jetbrains.com/plugin/8183-gitlink/): links Files to Github so that you can open remotely on right-click.
