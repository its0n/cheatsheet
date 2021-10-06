# CheatSheet

## Features
-   Copy content from the **CheatSheet** panel directly to your clipboard - Just click on it!
-   Customize the **CheatSheet** panel with individual entries by creating your unique config file

![screenshot-features](https://raw.githubusercontent.com/its0n/cheatsheet/master/screenshots/cheatsheet-features.gif?token=Asylm6wUUt_U2sOLCtTflYMAhL7RmR7Lks5cSInawA%3D%3D)

## Commands
-   To open **CheatSheet** type `cheatsheet:toggle` in the Atom command palette or press `ctrl-alt-#`
-   To edit and create your custom **CheatSheet** type `cheatsheet:edit` in the Atom command palette
-   To reload **CheatSheet** type `cheatsheet:reload` in the Atom command palette

All commands are also available via context menu --> Click the right mouse button on the visible **CheatSheet** panel

## Configuration

### Set a custom config file path

**CheatSheet** stores all configuration parameters in a config file (support for ".coffee" files only).
`OPTIONAL` You have the possibility to set a custom config file path:

1.   Go to package settings and insert your custom file path or use the default path
2.   Type `cheatsheet:edit` in the Atom command palette -->
     this will create a copy of the default **CheatSheet** file in your custom directory
3.   Press `Edit Config` in the notification dialog -->
     this will open your custom **CheatSheet**
4.   Customize the file as you like and save the file
5.   Type `cheatsheet:reload` in the Atom command palette to reload your config file and check if the change was saved successfully

### Customize the config file

![screenshot-edit](/screenshots/cheatsheet-edit.gif?token=Asylm50ghwfXFLkZtTqerwtrqc-9zW3Oks5cSIprwA%3D%3D)

**CheatSheet** has five `type`s you can configure:
`header`, `subheader`, `content` and `spacer`

-   `header` creates a header

    Example:

    ```coffeescript
    {
      type: 'header'
      text: 'Git'
      icon: 'devicons devicons-git'
    }
    ```
    - `text`: Add your custom header text
    - `icon` `OPTIONAL`: Add a custom icon from the [Devicon](http://vorillaz.github.io/devicons/#/cheat) (`devicon`) icon-set;
      Using the full CSS class is mandatory: `devicons devicons-ICONNAME`


-   `subheader` creates a subheader

    Example:

    ```coffeescript
    {
      type: 'subheader'
      text: 'Make Changes'
    }
    ```
    `text`: Add your custom header text


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
    - `text`: Add your custom **CheatSheet** content. `IMPORTANT`: If you are working under windows remember to use `\\` to escape `\` to show paths correctly:
      ```coffeescript
      text: 'venv\\Scripts\\activate'
      ```

    - `description` `OPTIONAL`: Add a description for more details

    - `rows` `OPTIONAL`: Number of rows define the height of the copy area to avoid scrolling

-   `spacer` adds separators between **CheatSheet** elements



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
    description: 'Create a new virtual environment'
  }
  {
    type: 'content'
    text: 'venv\\Scripts\\activate'
    description: 'Activate a virtual environment on Windows'
  }
  {
    type: 'content'
    text: 'source venv/bin/activate'
    description: 'Activate a virtual environment on Unix/MacOS'
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

## License

MIT © [Fabian Arlt](https://github.com/its0n)
