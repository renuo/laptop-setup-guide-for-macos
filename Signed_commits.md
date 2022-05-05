# Signed Commits

You can sign your git commits for improved security and account.

**Step 1. Install Software**

- ```brew install gpg2 pinentry-mac```

**Step 2. Create** ~/.gnupg/gpg-agent.conf

- Insert:
  - ```pinentry-program /opt/homebrew/bin/pinentry-mac```

**Step 3. Create** ~/.gnupg/gpg.conf

- Insert:
  - ```use-agent```

**Step 4. Modify** ~/.bashrc **or** ~/.zshrc

- Append:
  - ```export GPG_TTY="tty"```
  - Restart Terminal

**Step 5. Generate your Key** [Generate Key](https://help.github.com/articles/generating-a-new-gpg-key/)

- Add GPG key to your GitHub Account

**Step 6. Configure Git**

- ```git config --global user.name <YOUR_NAME>```
- ```git config --global user.email <YOUR_EMAIL>```
- ```git config --global user.signingkey <YOUR_KEY_ID>```
- ```git config --global commit.gpgsign true```
- ```git config --global gpg.program $(which gpg)```

**Step 7. Store password in keychain**

1. Create a Commit and toggle “Save in Keychain”
2. Restart your Mac
3. There should now be a GnuPG entry in your Keychain
