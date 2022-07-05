const { Router } = require('express')
const CreateRouter = require('../presentation/create-partner.route')
const Routes = Router()

Routes.get('/', (request, response) => {
  response.send('hello world')
})

Routes.post('/partner', async (request, response) => {
  const c = await request.body
  const req = {
    body: c
  }
  const a = new CreateRouter()
  const b = await a.Route(req)
  response.json(b)
  // console.log(c)
})

Routes.get('/partner/:id', (request, response) => {
  const { id } = request.params
  response.send(id)
})

Routes.get('/partner/:long:lat', (request, response) => {
//   const { long, lat } = request.params
  response.send('hello world')
})

module.exports = Routes
