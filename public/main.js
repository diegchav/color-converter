const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Load react application.
  win.loadURL('http://localhost:3000');

  // Dereference windo object.
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
  // Re-create window on macOS when dock is clicked and
  // there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

