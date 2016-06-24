'use strict';

const electron = require('electron');
const app = electron.app;
const { ipcMain } = require('electron');
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow() {
	console.log('electron: ', electron);

	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: false
	});

	mainWindow.loadURL(`file://${__dirname}/src/index.html`);

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function(){
	if (mainWindow === null) {
		createWindow();
	}
})

ipcMain.on('close-main-window', function () {
	console.log('ipc close-main-window...');
    app.quit();
});