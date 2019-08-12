const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

function removeDir(dir) {
  let files = []
  try {
    files = fs.readdirSync(dir)
  } catch (e) {
    console.log(chalk.yellow('no such file or directory'))
    return null
  }
  for (let i = 0; i < files.length; i++) {
    let newPath = path.join(dir, files[i]);
    let stat = fs.statSync(newPath)
    if (stat.isDirectory()) {
      removeDir(newPath);
    } else {
      fs.unlinkSync(newPath);
    }
  }
  fs.rmdirSync(dir)
}

removeDir(path.resolve(__dirname, '../v-easy-components'));
