const { Router } = require('express')
const Routes = Router()
const createPartner = require('../middleware/createPartner-middleware')
const loadPartner = require('../middleware/loadPartner-middleware')

Routes.get('/', (request, response) => {
  response.send('hello world')
})

Routes.post('/partner', createPartner)

Routes.get('/partner/:id', loadPartner)

Routes.get('/partner/:long:lat', (request, response) => {
//   const { long, lat } = request.params
  response.send('hello world')
})

module.exports = Routes
