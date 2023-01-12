# Word Scrubber

## Overview

The script is designed to provide users with a way to filter out unwanted content from the websites they visit. It allows the user to specify a list of words they want to scrub from the website and then removes any mention or appearance of those words from the website's HTML code before the page is rendered in the user's browser.

## Features

- Removes any mention or appearance of specified words from the website's HTML code.
- Can be applied to any website.
- Easy to use and customize.

## Setup and Installation 

- Install the appropriate version of [Tampermonkey](https://www.tampermonkey.net) for your browser if you have not done so already.
- Between "Installed userscripts" and "Utilites", hit "Settings". 
- Beside "General" make sure "Config mode" is set to "Advanced" via the dropdown menu.
- Right next to "Editor", hit "Settings", head to "Includes/Excludes", under "User Includes", hit "Add..." and add these following websites below:
  - Add these sites: `http://*/*` and `https://*/*`
- This will make sure every website is affected by the script!

## Usage

- Browse to the website you want to scrub the unwanted words from.
- The script will automatically remove any mention or appearance of the specified words from the website's HTML code before the page is rendered in your browser.
- You can customize the list of words you want to scrub from the website by editing the script at any time.
