// Copyright (c) 2020 Termius Corporation.
const os = require('os');
const { Notification } = require('electron');

function ShowNotification(title, message) {
  new Notification({
    title: title,
    body: message,
    silent: true
  }).show();
}

setTimeout(() => {
  const electron = require('electron');
  const window = electron.BrowserWindow;

  ShowNotification('Termodius', 'Termodius loaded!');

  try {
    const focusedWindow = window.getFocusedWindow();
    focusedWindow.setTitle('Termodius');

    focusedWindow.webContents.on('before-input-event', (event, input) => {
      if (input.type === 'keyDown' && input.key === 'F12') {
        if (focusedWindow.webContents.isDevToolsOpened()) {
          focusedWindow.webContents.closeDevTools();
        } else {
          focusedWindow.webContents.openDevTools();
        }
      }
    });

        focusedWindow.webContents.executeJavaScript(`
const fs = require('fs');
const path = require('path');
const themesDir = path.join(__dirname, '../../../../../themes');

console.log('executing css injection');

if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir);
}
fs.readdir(themesDir, (err, files) => {
    if (err) {
        console.error('Error reading themes directory:', err);
        return;
    }

    files.filter(file => file.endsWith('.css')).forEach(file => {
        const cssPath = path.join(themesDir, file);
        console.log('Injecting CSS from:', cssPath);
        const css = fs.readFileSync(cssPath, 'utf8');
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);
    });
});
    `);
  } catch (e) {
    console.log(e);
  }
}, 5000);

function convertPlatform(platform) {
  if (platform === 'darwin') {
    return 'mac';
  } else if (platform === 'win32') {
    return 'win';
  } else {
    return platform;
  }
}

module.exports = require(`@termius/libtermius/${convertPlatform(os.platform())}-${os.arch()}/termius.node`);