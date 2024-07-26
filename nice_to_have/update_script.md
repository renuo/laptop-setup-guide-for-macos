
# Update Brew and List Outdated Apps

This script helps you update Homebrew and list outdated applications on your macOS. It also checks for available software updates and outdated macOS apps from the App Store.

## Prerequisites

Make sure you have `mas` (Mac App Store command line interface) installed. You can install it using Homebrew:

```sh
brew install mas
```

## Script Explanation

The script performs the following tasks:

1. **Finding available macOS software updates**:
    ```sh
    softwareupdate -l
    ```
    This command lists all available software updates for macOS.

2. **Finding outdated macOS Apps**:
    ```sh
    mas outdated
    ```
    This command lists all outdated applications installed via the Mac App Store.

3. **Updating Homebrew**:
    ```sh
    brew update
    ```
    This command updates Homebrew to the latest version.

4. **Upgrading Homebrew packages**:
    ```sh
    brew upgrade
    ```
    This command upgrades all installed packages to their latest versions.

5. **Cleaning up Homebrew**:
    ```sh
    brew cleanup
    ```
    This command removes outdated versions of installed formulas and clears the cache.

## Full Script

```zsh
#!/bin/zsh

printf "\e[1;33m%s\e[m
" '==> Finding available  macOS software'
softwareupdate -l

printf "\e[1;33m%s\e[m
" '==> Finding  macOS Apps'
mas outdated

printf "\e[1;33m%s\e[m
" '==> brew update'
brew update

printf "\e[1;33m%s\e[m
" '==> brew upgrade'
brew upgrade

printf "\e[1;33m%s\e[m
" '==> brew cleanup'
brew cleanup
```

Copy and paste the script into a file, for example `update_brew.sh`, and make it executable:

```sh
chmod +x update_brew.sh
```

Then, you can run the script:

```sh
./update_brew.sh
```
