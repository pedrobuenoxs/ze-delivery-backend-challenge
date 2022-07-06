const { Router } = require('express')
const Routes = Router()
const getById = require('../controllers/getById-controller')

Routes.get('/', (request, response) => {
  response.send('hello world')
})

Routes.post('/partner', getById)

Routes.get('/partner/:id', (request, response) => {
  const { id } = request.params
  response.send(id)
})

Routes.get('/partner/:long:lat', (request, response) => {
//   const { long, lat } = request.params
  response.send('hello world')
})

module.exports = Routes
