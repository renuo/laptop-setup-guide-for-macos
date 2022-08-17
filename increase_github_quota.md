# Increase Github Quota

If you have problems with the Github API, you can increase your quota. The following way you can create a token for Homebrew to not use up our Github IP quota so fast:

1. Go to the following webpage:
2. Follow this link: [Link](https://github.com/settings/tokens/new?scopes=&description=Homebrew)
3. Click generate
4. Copy the generated key
5. Open a terminal to export the key like that:
6. echo 'export HOMEBREW_GITHUB_API_TOKEN="the_new_token"' >> ~/.zshrc
