const { app, BrowserWindow } = require('electron');
const path = require('node:path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;
let splash;

const createWindow = () => {

  splash = new BrowserWindow({
    width: 600,
    height: 400,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
  });
  splash.loadFile(path.join(__dirname, 'splash.html'));
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 900,
    show: false,
    title: 'EventoFix',
    icon: path.join(__dirname, 'EventosIcon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:5173');
  //mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.on('did-finish-load', () => {
    setTimeout(() => {
      if (splash && !splash.isDestroyed()) {
        splash.close();
        splash = null;
      }
      mainWindow.show();
    }, 1000);
  }
  );
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.