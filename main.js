const electron = require('electron')
const url = require('url')
const path = require('path');


const { app, BrowserWindow, Menu } = electron;


let mainWindow
// list for the app

app.on('ready', function () {
    // create new window
    mainWindow = new BrowserWindow({});

    // load html into window

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    // Build Menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // insert menu
    Menu.setApplicationMenu(mainMenu)
});


// create menu template

const mainMenuTemplate = [
    {
        label: 'File'
    }
];