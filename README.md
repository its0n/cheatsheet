# CheatSheet

[![Build Status](https://travis-ci.org/cakecatz/flex-toolbar.svg?branch=master)](https://travis-ci.org/cakecatz/flex-toolbar)

## About

### Features
-   Copy content from the cheatsheet panel directly in your clipboard - Just click on it!
-   Customize the cheatsheet panel with individual entries in a config file

### Commands
-   To open cheatsheet type `cheatsheet:toggle` in the Atom command palette or press `ctrl-alt-#`
-   To edit and create your custom cheatsheet type `cheatsheet:edit` in the Atom command palette
-   To reload cheatsheet type `cheatsheet:reload` in the Atom command palette

All commands are also available via context menu --> Press right mouse button on the visible cheatsheet panel.

![screenshot](https://raw.githubusercontent.com/cakecatz/flex-toolbar/docs/screenshot_cson.png)

## Configuration

### Set a custom config file path

**CheatSheet** has the possibility to set a custom config file path.

1.   Go to package settings and insert your custom file path or use the default path
2.   Type `cheatsheet:edit` in the Atom command palette -->
     this will create a copy of the default cheatsheet file in your custom directory
3.   Press `Edit Config` in the notification dialog -->
     this will open your custom cheatsheet
4.   Customize the file as you like and save the file
5.   Type `cheatsheet:reload` in the Atom command palette to reload your config file and see the changes

### Customize the config file

**CheatSheet** has five `type`s you can configure:
`header`, `subheader`, `content` and `spacer`.

-   `header` creates a header

    Example:

    ```coffeescript
    {
      type: 'header'
      text: 'Git'
      icon: 'devicons devicons-git'
    }
    ```
    - `text`: Add your custom header text.
    - `icon` `optional`: Add a custom icon from the [Devicon](http://vorillaz.github.io/devicons/#/cheat) (`devicon`) icon-set.
      Using the full class is mandatory: `devicons devicons-`.


-   `subheader` creates a subheader

    Example:

    ```coffeescript
    {
      type: 'subheader'
      text: 'Make Changes'
    }
    ```
    `text`: Add your custom header text.


-   `content` creates the copy to clipboard element

    Example:

    ```coffeescript
    {
      type: "content"
      text: 'git add .'
      description: "Add all files to commit"
      rows: 5
    }
    ```
    - `text`: Add your custom cheatsheet content. `IMPORTANT`: If you are working under windows remember to use `\\` to escape `\` to show paths correctly:
      ```coffeescript
      text: 'venv\\Scripts\\activate'
      ```

    - `description` `optional`: Add a description for more details

    - `rows` `optional`: Number of rows define the height of the copy area. You can manually set it up to avoid scrolling.

-   `spacer` adds separators between cheatsheet elements.



#### .coffee Example (Default file)

```coffeescript
#http://vorillaz.github.io/devicons/#/cheat
module.exports = [
  {
    type: 'header'
    text: 'Git'
    icon: 'devicons devicons-git'
  }
  {
    type: 'content'
    text: 'git init'
    description: 'Initialize current directory as a repository'
  }
  {
    type: 'content'
    text: 'git add .'
    description: 'Add all files to commit'
  }
  {
    type: 'content'
    text: 'git status'
    description: 'Displays paths that have differences between the index file and the current HEAD commit'
  }
  {
    type: 'content'
    text: 'git commit -m [COMITT_NAME]'
    description: 'Records file snapshots permanently in version history'
  }
  {
    type: 'content'
    text: 'git push origin master'
    description: 'Push origin to master'
  }
  {
    type: 'header'
    text: 'Python Virtual Env'
    icon: 'devicons devicons-python'
  }
  {
    type: 'subheader'
    text: 'Create and Activate'
  }
  {
    type: 'content'
    text: 'python -m virtualenv venv'
    description: 'Create a new virtual enviroment'
  }
  {
    type: 'content'
    text: 'venv\\Scripts\\activate'
    description: 'Activate a virtual enviroment on Windwos'
  }
  {
    type: 'content'
    text: 'source venv/bin/activate'
    description: 'Activate a virtual enviroment on Unix/MacOS'
  }
  {
    type: 'subheader'
    text: 'Requirements'
  }
  {
    type: 'content'
    text: 'pip freeze > python-requirements.txt'
    description: 'Create a requirements.txt file'
  }
  {
    type: 'content'
    text: 'pip install -r requirements.txt'
    description: 'Install packages from requirements.txt'
  }
  {
    type: 'spacer'
  }
  {
    type: 'header'
    text: 'HTML'
    icon: 'devicons devicons-html5'
  }
  {
    type: 'content'
    text: '<!DOCTYPE html>
          <html>
          <head>
          <title>Page Title</title>
          </head>
          <body>

          <h1>This is a Heading</h1>
          <p>This is a paragraph.</p>

          </body>
          </html>'
    description: 'Basic HTML file structure'
    rows: 5
  }
  {
    type: 'header'
    text: 'Atom'
    icon: 'devicons devicons-atom'
  }
  {
    type: 'content'
    text: 'styleguide:show'
    description: 'Show styleguide for atom'
  }
  {
    type: 'content'
    text: 'window:toggle-dev-tools'
    description: 'Toggle dev tools for atom'
  }
]
```


## Author

[![Fabian Arlt][fabian avator]](https://github.com/its0n)
|:-----------------------------------------------------------:|
           [Fabian Arlt](https://github.com/its0n)           

## License

MIT © [Fabian Arlt](https://github.com/its0n)

[fabian avator]: https://avatars1.githubusercontent.com/u/46966171?s=460&v=4