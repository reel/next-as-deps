const express = require('express')
const next = require('next')
const path = require('path')

const appRootDir = require('app-root-dir').get();
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dir: appRootDir, dev })

console.log(`> next.js pages are located at ${path.join(appRootDir, './pages')}`)

const handle = app.getRequestHandler()

const server = express()

server.view = app.render;

exports.init = () => server;

exports.run = () => {
  app.prepare()
  .then(() => {
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
}
