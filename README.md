# LeetCode Editor Font

This Chrome extension forces the editor font on leetcode.com to any custom font.

Note: You must have the font installed on your system (Windows) for it to render. Otherwise it will fall back to other monospace fonts.

## Install the Font on Windows

1. Download required font.
2. Install the TTF/OTF files (right-click > Install for all users).
3. Restart Chrome if it was open.

## Load the Extension in Chrome

1. Open `chrome://extensions` in Chrome.
2. Enable "Developer mode" (top right).
3. Click "Load unpacked" and select the folder:
   `leetcode-font-chrome-extension`
4. Visit a problem page on https://leetcode.com, open the editor, and the font should apply.

## Notes

- Targets Monaco (the LeetCode editor) and CodeMirror (legacy) selectors.
- If LeetCode changes DOM structure, you might need to update CSS selectors.
- You can tweak default size/line-height in `style.css`.
