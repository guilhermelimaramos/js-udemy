const fs = require('fs').promises

const path = require('path')

async function readdir(roodDir) {
  roodDir = roodDir || path.resolve(__dirname)
  const files = await fs.readdir(roodDir)
  walk(files, roodDir)
}

async function walk(files, roodDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(roodDir, file)
    const status = await fs.stat(fileFullPath)
    
    if (/\.git/g.test(fileFullPath)) continue
    if (/node_modules/g.test(fileFullPath)) continue
    
    if(status.isDirectory()) {
      readdir(fileFullPath)
      continue
    }
    
    if (
      !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
    ) continue
    console.log(fileFullPath)
  }
}

readdir('C:/Users/Suporte/Documents/Guilherme Lima/JS e TS')