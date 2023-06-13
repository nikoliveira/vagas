const { handleError } = require('./../middlewares')
const userRoute = require('./userRoute')

const router = (app) => {
  // user routes
  userRoute(app)

  // error handler
  app.use((err, _req, res, _next) => {
    handleError(err, res);
  })
}


module.exports = {
  router
}