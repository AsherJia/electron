'use strict';

const { ipcRenderer } = require('electron');
const {dialog} = require('electron').remote;
const closeEl = document.querySelector('#close-app');
const openFileEl = document.querySelector('#open-file');
const messageDialog = document.querySelector('#message-dialog');

closeEl.addEventListener('click', function () {
	console.log('Click closeEl.', ipcRenderer);
    ipcRenderer.send('close-main-window');
});

openFileEl.addEventListener('click', function() {
	console.log('Click openFile dialog: ');
	const result = dialog.showOpenDialog({
		properties: ['openFile', 'openDirectory', 'multiSelections']
	});
	console.log('Result: ', result);
});

messageDialog.addEventListener('click', function(){
	console.log('Click message Dialog...')
	const result = dialog.showMessageBox({
		type: "warning",
		title: "Warning message box.",
		buttons:['Ok', 'Cancel']
	});

	console.log('Result: ', result);
})