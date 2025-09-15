# 📦 Nice-to-Have: NAS Backup with Time Machine (macOS)

This section describes how to configure **Time Machine** on your MacBook to use Renuo's NAS (Network Attached Storage) over SMB as the backup destination. This gives you automatic versioned backups of your system and data.

---

## Setup Steps

1. **Retrieve credentials from 1Password**

   - Open **1Password**.  
   - Find the entry **`[Renuo-NAS] Backup User`**.  
   - Copy the:  
     1. **Username**  
     2. **Password**  
     3. **Server Address**

   > Example placeholders:  
   > - Server Address: `smb://NAS_ADDRESS/laptop_backups`  
   > - Username: `backupuser`  
   > - Password: `••••••••`

   👉 Tip: You can also **click the `smb://` link directly in 1Password** to open the connection prompt directly without following step 2 but ensure to use username and password combo provided in 1PW. If you do so, you can skip to step 3.

---

2. **Connect to the SMB share**

   - If needed manually: In Finder, press `⌘ + K` (Go → Connect to Server).  
   - Enter the server address, e.g.:  
     ```
     smb://NAS_ADDRESS/laptop_backups
     ```  
   - Click **Connect**.  
   - When prompted, enter the username and password you copied from 1Password.  
   - Optionally, check **“Remember this password in my keychain”**.

   ⚠️ If macOS asks which volume to mount, choose **`laptop_backups`**.

---

3. **Enable the share for Time Machine**

   - Ensure the NAS share is mounted (visible under **Locations** in Finder).  
   - Open **System Settings → General → Time Machine**  
     (on older macOS: **System Preferences → Time Machine**).  
   - Click **Add Backup Disk…** (or **Select Backup Disk…**).  
   - From the list, select the NAS share: **`laptop_backups on NAS_ADDRESS`**.  
   - Click **Set Up Disk**.
   - enter the NAS username/password again (from 1Password).  

---

4. **Configure backup options**

   - **Enable Encryption** (recommended).  
     - When prompted, set a strong password you can remember.  
     - ⚠️ This password protects your backup — do **not** share it with anyone, and store it safely (e.g., in 1Password, **personal** vault).  
   - Set **Disk Usage Limit** to custom and with the slider set a quota around **2TB**.
   - Click **Done**.

---

6. **First backup**

   - The initial backup may take several hours depending on your data size.  
   - Keep your Mac powered and connected to the network (preferably wired if possible).  

✅ That’s it! Your Mac will now back up regularly to the shared NAS folder, keeping your system and files protected.
