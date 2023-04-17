# Setup SSH Key

An SSH key is a token which can be used to identify you and your machine. Everyone at our company has at least one. You can use this guide to create one:

Go to your GitHub settings and "Add a new SSH key". 
Use 1Password to generate an ED25519 SSH key.

Follow the instructions on 1Password to use the 1Password SSH-Agent.


See also [1Password SSH Agent](https://blog.1password.com/1password-ssh-agent/)

Setup signing your commits with 1Password:

See also [Git Commit Signing](https://blog.1password.com/git-commit-signing/)


**Once done, make a PR with the .pub file to** [Renuo public keys](https://github.com/renuo/ssh-public.renuo.ch).
_The public key can be copied from 1Password_

<div style="background-color: #d9edf7; border-color: #bce8f1; color: #31708f; padding: 15px; margin-bottom: 20px; border: 1px solid transparent; border-radius: 4px;">
    <b>Tip</b>
    <p>Clone the <a href="https://github.com/renuo/ssh-public.renuo.ch">ssh-public.renuo.ch</a> repository and create your first commit within the Renuo organization.</p>
    <p>This will ensure that you have the correct permissions to push and correctly set up your SSH key. Your commits should be verified by GitHub.</p>
</div>
