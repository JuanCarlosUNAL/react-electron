import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { app, BrowserWindow } from 'electron';
import { is } from 'electron-util';

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  console.log(is.development ? 'Development' : 'Production');
  if (is.development) {
    win.loadURL('http://localhost:8080/');
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
  }
  else {win.loadFile('./dist/index.html');}
}

app.on('ready', createWindow);
