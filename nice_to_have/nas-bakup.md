# 📦 Nice-to-Have: NAS Backup with Time Machine (macOS)

This section describes how to configure **Time Machine** on your MacBook to use Renuo's NAS (Network Attached Storage) over SMB as the backup destination. This gives you automatic versioned backups of your system and data.


## Setup Steps

1. **Retrieve credentials from 1Password**

   - Open 1Password.  
   - Find the entry `[Renuo-NAS] Backup User`  
   - Copy the:
        1. **Username**, 
        2. **Password**.  
        3. **Server Address**

   > Example placeholders:  
   > - Server Address: `smb://NAS_ADDRESS/Backups`  
   > - Username: `backupuser`  
   > - Password: `••••••••`

2. **Connect to the SMB share**

   - In Finder, press `⌘ + K` (Go → Connect to Server).  
   - Enter the server address, e.g.:  
     ```
     smb://NAS_ADDRESS/Backups
     ```  
   - Click **Connect**.  
   - When prompted, enter the username and password you got from 1Password.  
   - Optionally, check “Remember this password in my keychain”.

3. **Enable the share for Time Machine**

   - Once connected, ensure the NAS share is mounted (you see it under Locations in Finder).  
   - Open **System Settings** > **General** > **Time Machine** (on older macOS: **System Preferences** > **Time Machine**).  
   - Click **Select Backup Disk…**.
   - In the list of available disks, locate your mounted SMB share (e.g. `Backups on NAS_ADDRESS`).  
   - Select it, then click **Use Disk**.

4. **Authenticate if needed**

   - If macOS asks for credentials when selecting the disk, again supply the NAS username/password (from 1Password).  
   - Optionally, choose “Remember this password in my keychain” to avoid repeated prompts.

5. **Configure backup options**
   - **Enable Encryption** 
   - Choose whether to back up automatically (toggle On).  
   - Optionally exclude large folders you don’t need (like certain media or temporary files) via the **Options…** settings in Time Machine preferences.  
   - Review backup frequency (by default every hour) and how long backups are kept (macOS handles this automatically, removing oldest as space demands).

6. **First backup**

   - The first backup can take a long time depending on how much data you have.  
   - Make sure your MacBook stays connected, ideally plugged in and on Wi-Fi or wired network (if you don't have wired connection at your desk you can ask for it0)

7. **Verifying backups**

   - Verify that subsequent backups are occurring on schedule.  
   - Occasionally, try restoring a few files to verify integrity.  
   - Monitor NAS free disk space; Time Machine keeps versions until space runs out.