const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu} = electron;

let mainWin;

app.on('ready', function(){

    mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        show: false,
        fullscreenable: false,
        title: "pyGen",
        webPreferences: {
            nodeIntegration: true,  
        }
    });
    Menu.setApplicationMenu(null);
    mainWin.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWin.once('ready-to-show', ()=> {
        mainWin.show()
    });
});

app.on('window-all-closed', () => {
    app.quit()
})
