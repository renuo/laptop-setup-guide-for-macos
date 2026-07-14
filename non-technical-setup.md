# Non-technical Setup

This is the part of the setup guide where you will install the minimum software and programs to get started at Renuo.
If you are experienced you can choose your own setup, but we recommend that you follow our setup instructions.

## macOS Setup

Now we're going to set up your freshly unboxed Macbook.
Below we list some important settings.
Not applying them needs a good reason.

**Read them first:**

- **Apple ID:** Create a new Renuo Apple ID (Renuo email address) or use your own one.
- **Language:** Prefer English as main language
- **Keyboard:** Prefer US layout if you're a programmer
- **Wifi:** Use "Renuo Guest"
- **Find my:** Enable Location Services
- **iCloud:** Set up iCloud Keychain
- **Fingerprint sensor**: Set it up
- **Password**: Choose something strong (e.g. 4 words)

You should now see the desktop.
Apply now following adjustments to your configuration.

### System Preferences

The following settings are **required** for a secure default mode of working.
If you think something is not needed, then discuss it with a coworker.

Open the system preferences and configure the following options. Some options need a password.
Each macOS version has a different "System Preferences". Some options may be missing or have a different name.

- **Lock Screen**: Require password after screen saver begins or display is turned off in max. 10min
- **FileVault**: Make sure FileVault is enabled and the recovery key is stored in the iCloud Keychain.
- **Firewall**: Make sure it's turned on.
- **Privacy && Security**: Allow applications downloaded from "App Store and identified developers" (buzzword "Gatekeeper")
- **Software Update**: Click the ⓘ next to Automatic updates and enable all checkboxes for updates and security responses (buzzword "XProtect")

- **iCloud**: Click "See All" next to "Saved to iCloud".
  - **Find My Mac:** Turn on Find my Mac. This will allow you to find your Mac if it’s lost or stolen.
  - Disable everything else because we're going to synchronize everything with Google in the next step.

- **Internet Accounts**
  - **Add "Google":**
    - Login with @renuo.ch
    - Choose what you want

_More infos about how to increase your mac security can be found here:_

- Set up your Mac to be secure:
[Apple Support](https://support.apple.com/guide/mac-help/set-up-your-mac-to-be-secure-flvlt003/mac)
- For even much more information, visit this guide [macOS-Security-and-Privacy-Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide)

### AI Agents

If you want to use things like Claude Code, check out [AI Agents](./ai-agents.md)

### Internal Network Access

Since your device is now securely setup we can switch you to the internal "Renuo Wifi".
There is a MAC filter in place on the Unifi Cloud Key.
Ask wg-operations per Slack to add your MAC address to the allowlist, only then can you join the internal Wifi.
You can find your MAC address under System Settings → Wi-Fi → Advanced… (scroll down).

## Software Updates & Programs

### Google Chrome

Although you are free to use your favorite Browser on a daily basis, we require Chrome to be installed on all our laptops:

1. Download Google Chrome installer: [Google Chrome](https://google.com/chrome) (important: english version of chrome)
2. Login to Chrome with @renuo.ch credentials
3. Click "link data" (If you already installed plugins with your account, they should be synchronized now.) and then "Ok got it"

### 1Password

We use 1Password to store all our passwords.
Download the **[latest 1Password from the website](https://1password.com/de/downloads/)** and login with your @renuo.ch account.

From now on, you should use 1Password to store **all your passwords**.

### Create a Renuo AppleID

If you didn’t use the Renuo Apple ID to setup your MacBook go to [Apple ID](https://appleid.apple.com/) and create a new Apple ID with the Renuo Email.
This Renuo AppleID is used to install Testflight apps and later to publish apps to the App Store.

**Verify your AppleID**

1. Go back icloud.com and verify your email address by clicking "continue"
2. Enter the verification code you just got per email (you find your emails under [Gmail](https://gmail.com))

### System Updates

1. Go to "Software Update" in the system preferences and install all available updates.
2. Enable automatic updates for all apps and the system
3. Restart after updates have been installed
4. Repeat step 1 through 3 until there are no more updates left

While the updates are installing, you can already do the next steps.

### Github

Github is our main host for source code repositories, versioned with Git.

1. **If you don't already have an account**, please go there and create one: [Github](https://github.com)
2. After having done so, ask someone to add you to the Renuo organization to access our private repositories.
3. Enable two-factor authentication (2FA) for your account.
4. Add the renuo email address to your Github account (as a secondary email address).
Add a "Custom routing" rule to forward all emails from the Renuo organization to your @renuo.ch email address (Settings -> Notifications -> Default notifications email -> Custom routing).

### Slack

1. Download Slack from the App Store
2. Login with Google and your @renuo.ch account
3. You should be able to join the Renuo slack now

Now set your nickname to your fist name, all lowercase. E.g. Max Muster = max

### Google Chrome Extensions

1. **GitHub PR-Counter:** There's a Chrome plugin which shows how many pull requests you have. You can follow the instructions of the Plugin to set it up.
2. **1Password:** Ask someone to add you to the Renuo Account. Then follow the instructions in the mail.

Feel free to install any other extension that you like.

### Gravatar

Upload a picture of yourself and add your Renuo email addresses to your profile.
If you don't have a Gravatar account yet, then create one here: [Gravatar](https://en.gravatar.com/)

### Gifcoins.io

Ask someone to give you your first Gifcoins 🥳
Then you should automatically get added to the team.

### Redmine & Tracky

Check your email for the Redmine invitation. If you don't have one, ask someone to add you to the Renuo Account.

**Tracky** is an internal Redmine Plugin to manage our time entries. You can split your time on multiple tickets and start/stop by timer.
Go to [Redmine](https://redmine.renuo.ch/timer_sessions)

To start your session for the setup just input your ticket number or subscription into the top input field and select the relevant ticket. Now start the timer by pressing start.

- Start tracker when you start working
- Stop tracker when you leave the office
- Keep small tracked times. New Timer for new Task (later Customer wants to know what you did)
- Track always with a ticket number and a meaningful description

By the way, [Redmine Tracky is open source](https://github.com/renuo/redmine_tracky/). PRs are always welcome 😁.

## Congratulations 🥳

You are now ready to start working with the Renuo stack. You can now continue with the technical setup.

If you are not going to do the technical setup, please have a look at the [Nice to have](/nice-to-have.md) section.
There might be something interesting for you.
