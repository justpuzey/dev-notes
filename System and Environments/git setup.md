## Git and Git Bash

1. Go to the Git downloads page (Links to an external site.). Select the download for Windows. It should automatically download the most up-to-date version.

2. Use Next to progress through the installation until you get to the screen that asks you to choose a default editor for Git. Select "Use Visual Studio Code as Git's default editor".

Choosing the Default Editor in GitBash

3. When you see a prompt like this, select "Checkout as-is, commit Unix-style line endings".
   Configuring the Line Ending Conversions in GitBash

4. Finally, select "Use Windows' default console window".
   Configuring the Terminal Emulator in GitBash

Any settings not mentioned here can be left in their default mode.

## SSH Keys

To complete these steps, you'll need to sign up for a GitHub (Links to an external site.) account if you haven't already.

1.  Open Bash.

2.  To make sure you don’t already have a set of keys on your computer, type the following in your Bash window. You must type this—copying and pasting won't work!

`ls –al ~/.ssh`

- If no keys pop up, move on to Step 3.

- If keys do pop up, check that none of them are listed under `id_rsa`, like in this image:

GitBash Showing Existing SSH Keys on Computer

- If you find a key with a matching name, you can either overwrite it by following the next steps, or you can use the same key referenced in Step 8.

- If you decide not to overwrite it, you'll need to remember the password tied to your key.

3. Enter the following command to generate your keys, but be sure to replace `YOURGITHUBEMAIL@PLACEHOLDER.NET` with the email address that you use for your GitHub account.

`ssh-keygen –t rsa –b 4096 –C ` "YOURGITHUBEMAIL@PLACEHOLDER.NET"

4. When prompted to enter a file to save the key, press Enter, and then enter a passphrase for your key.

### NOTE

You shouldn’t see any characters appear in the window while typing the password.

When you’re finished, your window should look like this image:

Creating an SSH Key

5. Link your key to your machine using a tool called the ssh-agent. Run the following command in Bash to test whether the ssh-agent is running on your machine:

`eval "$(ssh-agent –s)"`

Your Bash window should look like the following:

SSH Agent

6. Run the following command:

`ssh-add ~/.ssh/id_rsa`

7. When prompted, enter the passphrase associated with the key.

### NOTE

If you’ve forgotten this key, go back to Step 3.

8. To add the key to GitHub, copy the key to your clipboard by entering the following command:
   `clip < ~/.ssh/id_rsa.pub`
   You shouldn’t see any kind of message when you run this command. If you do, make sure you entered it correctly.

### NOTE

Do not copy anything else to your clipboard until all steps are completed. Otherwise, you’ll need to enter the copy command again.

9. Go to your GitHub account's SSH key settings (Links to an external site.). Click "New SSH key".

Add New SSH Key in GitHub

10. When the form pops up, enter a name for your computer in the Title input. In the Key input, paste the SSH key you copied in Step 8.

11. To add GitHub to your computer’s list of acceptable SSH hosts, type the following command in your Bash window:

`ssh –T git@github.com`

You should see an RSA fingerprint in your window. Enter "yes" only if it matches the one highlighted in the following image:

GitBash RSA Fingerprint

## Set Your Git Username for Every Repository on Your Computer

Git uses a username to associate commits with an identity. The Git username is different from your GitHub username.

You can change the name that's associated with your Git commits using the `git config` command. The new name you set will be visible in any future commits you push to GitHub from the command line. If you'd like to keep your real name private, you can use any text as your Git username.

Changing the name associated with your Git commits using git config will only affect future commits and will not change the name used for past commits.

To learn more, see GitHub's documentation on setting your git username for every repository on your computer (Links to an external site.):

Setting Your Git Username for Every Repository on Your Computer

## Set Your Email Address for Every Repository on Your Computer

GitHub uses the email address set in your local Git configuration to associate commits pushed from the command line with your GitHub account.

You can use the git config command to change the email address you associate with your Git commits. The new email address you set will be visible in any future commits you push to GitHub from the command line. Any commits you made before changing your commit email address are still associated with your previous email address.

To learn more, see GitHub's documentation on setting your email address for every repository on your computer (Links to an external site.):

Setting Your Email Address for Every Repository on Your Computer

For more information on commit email addresses, including your GitHub-provided noreply email address, see the GitHub article entitled "About commit email addresses." (Links to an external site.)
