'use babel';

import CheatsheetView from './cheatsheet-view';
import { CompositeDisposable } from 'atom';

const fs = require('fs');
const path = require('path');
const defaultName = 'default-cheatsheet.coffee';
const customName = 'cheatsheet.coffee';

export default {

  configPath: null,
  cheatsheetView: null,
  rightPanel: null,
  subscriptions: null,

  // Set up settings view
  config: {
    configPath: {
      title: 'Set your configuration file path',
      description: 'You must edit and reload the cheatsheet to see the effect.',
      type: 'string',
      default: atom.getConfigDirPath(),
    }
  },



  activate(state) {

    this.cheatsheetView = new CheatsheetView(state.cheatsheetViewState);

    this.rightPanel = atom.workspace.addRightPanel({
      item: this.cheatsheetView.getElement(),
      visible: false
    });


    this.loadCheatSheetContent();

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'cheatsheet:toggle': () => this.toggle()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'cheatsheet:edit': () => this.editCheatsheet()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'cheatsheet:reload': () => this.loadCheatSheetContent()
    }));
  },



  deactivate() {
    this.rightPanel.destroy();
    this.subscriptions.dispose();
    this.cheatsheetView.destroy();
  },



  serialize() {
    return {
      cheatsheetViewState: this.cheatsheetView.serialize()
    };
  },



  toggle() {
    console.log('Cheatsheet was toggled!');
    return (
      this.rightPanel.isVisible() ?
      this.rightPanel.hide() :
      this.rightPanel.show()
    );
  },



  editCheatsheet() {

		// Destination path from config file
		let customPath = atom.config.get('cheatsheet.configPath');
    console.log(customPath);
		if (fs.existsSync(customPath)) {

			var customPathTotal = path.join(customPath, customName);

			if (fs.existsSync(customPathTotal)) {
        atom.workspace.open(customPathTotal);
      } else {
        this.copyDefaultConfig(customPathTotal)
      }

		} else {
      customPath = path.normalize(customPath);
      atom.config.set('cheatsheet.configPath', customPath);
      var customPathTotal = path.join(customPath, customName);
      fs.mkdirSync(customPath);
      this.copyDefaultConfig(customPathTotal)
    }
  },



  copyDefaultConfig(destinationPathFile) {
    // Default config file path
    var defaultPath = __dirname;
    var defaultPathTotal = path.join(defaultPath, defaultName);
    if (fs.existsSync(defaultPathTotal)) {
      const { COPYFILE_EXCL } = fs.constants;
      // By using COPYFILE_EXCL, the operation will fail if destination exists.
      fs.copyFileSync(defaultPathTotal, destinationPathFile, COPYFILE_EXCL);

      atom.notifications.addInfo('We created your custom cheatsheet config file for you...', {
        detail: destinationPathFile,
        dismissable: true,
        buttons: [{
          text: 'Edit Config',
          onDidClick() {
            atom.workspace.open(destinationPathFile);
          }
        }]
      });

    } else {
      atom.notifications.addError('Default configuration file not found. Please reinstall the package.', {dismissable: true});
    }
  },



  getCurrentPath() {

		// Destination path from config file
		let customPath = atom.config.get('cheatsheet.configPath');
    let customPathTotal = path.join(customPath, customName);

		if (fs.existsSync(customPathTotal)) {
      return customPathTotal;
		} else {
      // Set up default path
      let defaultPathTotal = path.join(__dirname, defaultName);
			return defaultPathTotal;
		}
  },



  loadConfigFile() {

    // Get current path
    let currentPath = this.getCurrentPath();
    console.log(currentPath);

    // Set content to undefined
    let content;
    console.log(content);
    // If the module is loaded remove it
    this.removeCache(currentPath);

    try {
      // Load module again
      content = require(currentPath);
    }
    catch(err) {
      atom.notifications.addError('Invalid syntax in configuration file.', {
        dismissable: true,
        buttons: [{
          text: 'Open file',
          onDidClick() {
            // open the config file in atom
            atom.workspace.open(currentPath);
          }
        }]
      });
    }

    console.log(content);
    return content;

  },



  removeCache(filePath) {
    // Credits to flex-tool-bar contributers
    delete require.cache[filePath];

    try {
      let relativeFilePath = path.relative(path.join(process.cwd(), 'resources', 'app', 'static'), filePath);
      if (process.platform === 'win32') {
        relativeFilePath = relativeFilePath.replace(/\\/g, '/');
      }
      delete snapshotResult.customRequire.cache[relativeFilePath];
    } catch (err) {
      // most likely snapshotResult does not exist
    }
  },



  loadCheatSheetContent() {
    let content = this.loadConfigFile();
    if (content !== undefined) {
      this.drawCheatSheet(content);
    }
  },



  drawCheatSheet(content) {
    // Set html const for the copied effect
    const spanElements = '<span class="focus-text icon icon-clippy"></span><span class="focus-text">Copied</span>'

    // Remove all childs in the scrollable content div
    let scrollableContent = document.getElementById("ScrollableContent");
    while (scrollableContent.firstChild) {
      scrollableContent.removeChild(scrollableContent.firstChild);
      //console.log(scrollableContent.firstChild);
    }

    // Draw all HTML elements
    for (var i = 0; i < content.length; i++) {
      //console.log(content[i]);
      json = content[i]

      switch(json.type) {
        case 'header':
          const header = document.createElement('h2');
          header.innerHTML = '<span class="' + json.icon + '"></span>' + '<span class="devicons-text">' + json.text + '</span>';
          scrollableContent.appendChild(header);
          break;
        case 'subheader':
          const subheader = document.createElement('h3');
          subheader.textContent = json.text.toUpperCase();
          scrollableContent.appendChild(subheader);
          break;
        case 'content':

          var textarea = document.createElement("textarea");
          var divCodeContainer = document.createElement("div");
          var divFocusContainer = document.createElement("div");
          var divFocusBackground = document.createElement("div");

          // Set textarea properties
          if(json.hasOwnProperty('rows')){
            textarea.rows = json.rows;
          } else {
            textarea.rows = 1;
          }
          textarea.value = json.text;
          textarea.readOnly = true;
          textarea.classList.add('noselect');
          textarea.onclick = function(){atom.clipboard.write(this.value);};

          divCodeContainer.classList.add('code-container');
          divFocusContainer.classList.add('focus-container');
          divFocusContainer.innerHTML = spanElements;
          divFocusBackground.classList.add('focus-background');

          divCodeContainer.appendChild(textarea);
          divCodeContainer.appendChild(divFocusContainer);
          divCodeContainer.appendChild(divFocusBackground);
          scrollableContent.appendChild(divCodeContainer);

          //description
          if (json.description != "") {
            var description = document.createElement('div');
            description.textContent = json.description;
            description.classList.add("description");
            scrollableContent.appendChild(description);
          }

          break;
        default:
          var spacer = document.createElement('hr');
          scrollableContent.appendChild(spacer);
      }
    }
  },


};
