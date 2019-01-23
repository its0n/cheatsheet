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
