
const mainApp = require('with-next')

const app = mainApp.init()

app.get('/a', (req, res) => {
  return app.view(req, res, '/b', req.query)
})

app.get('/b', (req, res) => {
  return app.view(req, res, '/a', req.query)
})

mainApp.run()