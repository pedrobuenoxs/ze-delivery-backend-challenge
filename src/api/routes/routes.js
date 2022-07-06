const { Router } = require('express')
const Routes = Router()
const createPartner = require('../middleware/createPartner-middleware')
const loadPartner = require('../middleware/loadPartner-middleware')
const searchPartner = require('../middleware/searchPartner-middleware')

Routes.get('/', (request, response) => {
  response.send('hello world')
})

Routes.post('/partner', createPartner)

Routes.get('/partner/:id', loadPartner)

Routes.get('/partner/:long/:lat', searchPartner)

module.exports = Routes
