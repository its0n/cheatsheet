'use babel';

export default class CheatsheetView {

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    var root = this.element
    root.classList.add('root-cheatsheet');

    // Create fixed header element
    var fixedHeader = document.createElement("div");
    fixedHeader.classList.add('fixed-header');
    root.appendChild(fixedHeader);

    // Set up header
    var titleTag = document.createElement('h1');
    titleTag.textContent = "CheatSheet";
    fixedHeader.appendChild(titleTag);

    var button = document.createElement('button');
    button.classList.add('close-button');
    button.innerHTML = '<span class="icon icon-x"></span>';
    button.onclick = function(){atom.commands.dispatch(atom.views.getView(atom.workspace), "cheatsheet:toggle");};
    fixedHeader.appendChild(button);

    // Create scrollable content element
    var scrollableContent = document.createElement("div");
    scrollableContent.classList.add('scrollable-content');
    scrollableContent.id ='ScrollableContent';
    root.appendChild(scrollableContent);

  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
