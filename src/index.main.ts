import { app, BrowserWindow } from 'electron';
import { is } from 'electron-util';

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  console.log(is.development ? 'Development' : 'Production')
  if (is.development) win.loadURL('http://localhost:8080/')
  else win.loadFile('index.html');
}

app.on('ready', createWindow);