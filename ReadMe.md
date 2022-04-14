# Laptop Setup Guide for macOS

```
echo "Hello World"
console.log 'Hello, world!'
document.write('Hello, world!');
program HelloWorld;
begin
  WriteLn('Hello, world!');
end.
println("Hello, world!")
puts "Hello, world!"
```

## Welcome Renuooooaner !

Or Renuer 😄 because you are going to renew the IT World.

You're now part of an "engineer driven" company and your laptop is the engine which drives it. For us to succeed together, it's important that your machine works the best way possible. It should make you efficient and happy. What follows is a guide for setting up your laptop the way we think is the best. It's intended that you use this guide "as-is" if you haven't worked with a Mac yet. But if you're eager and experienced enough, you are welcome to customize your machine to what meets your needs best. Try to be happy and efficient.

## Before you start

- **Sudo:** Coming from the Linux world, you're maybe used to the sudo command. On a Mac, you should seldom be required to use sudo.
- **Step by step:** Please don’t skip parts of this guide and don’t start with the next part or command if you haven’t finished the previous one. In general, the commands are only guaranteed to **work in the order of the guide** and cannot be parallelized.
- **Read and understand the command line outputs:** The installer will tell you useful / necessary hints, which may require action. Additionally, this guide may be partly outdated soon, which makes it even more important to read the outputs of the installers.
- **Discuss changes:** Please extend or correct this guide if you think the information is missing, wrong or outdated. Discuss the changes you want to make here with at least one other person before you make them.

## macOS Setup 
* [First boot](First_boot.md)
* [Software Updates & Programs](Software_Programs.md)

For Renuo specific further setup follow this private guide [Information about Renuo](https://docs.google.com/document/d/1Pr5DQzfWo-YPUVc-kXyCay-d11dKsx0vZUWdwkSfMkc/)

## Basic Tools Setup 

Now follows the part where it gets more technical. There's a convention at Renuo for the directory structure of projects. In every project you'll find the following files:

- For setting up the project: ``` bin/setup ```
- To run the tests: ``` bin/check ```
- to run and try the application: ``` bin/run ```

There are some requirements which need to be met first that this works. The following steps are going to prepare your system for that. 

If you are experienced you can choose your own setup, but we recommend that you follow our setup instructions.


* [Homebrew](Homebrew.md)
* [zsh](zsh.md)
* [git](git.md)
* [git-flow](git_flow.md)
* [asdf](asdf.md) 
* [yarn](yarn.md)
* [vim](vim.md)
* [postgresql](postgresql.md)
* [GPG](GPG.md)
* [Redis](Redis.md)
* [Shared MIME Info](Shared_mime_info.md)
* [MYSQL](Mysql.md)
* [Setup SSH Key](Setup_ssh_key.md)
* [Heroku CLI](heroku_cli.md)
* [Renuo CLI](renuo_cli.md) 

## Finish Setup

Now you should be able to clone any project from the Renuo GitHub and start up the website.

To verify this:
1. Clone a project. e.g.: [Gifcoins2](https://github.com/renuo/gifcoins2)
2. Use: ```bin/setup```
3. Use: ```bin/run```

Open the website in Google Chrome and check if everything is working.

## Nice to have

Now you finished with the Setup, below are some further recommendations. Do the Mac Setup before you do any of the next steps (except you know exactly what you are looking for). Here now follows the section with stuff that is nice to have. Cherry-pick!

* [Rubymine](Rubymine.md)
* [Signed commits](Signed_commits.md)
* [Autojump](Autojump.md)
* [Google Drive](Google_Drive.md)
* [Sourcetree or Fork](Sourcetree_or_fork.md)
* [Puma-dev or Hotel](Puma_or_hotel.md)
* [Increase GitHub Quota](Increase_github_quota.md)
* [Firefox, Opera etc.](Firefox.md)
* [Keep you awake](Keep_you_awake.md)
* [Rectangle](Rectangle.md)
* [Alfred](Alfred.md)


