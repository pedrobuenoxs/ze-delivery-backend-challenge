const path = require('path')
const fs = require('fs')
const dataPath = path.resolve(__dirname, '../db/pdvs.json')

const LoadRouter = require('../controllers/load-partner-controller')
const SearchRouter = require('../controllers/search-partner-controller')
const CreateRouter = require('../controllers/create-partner-controller')
module.exports = class Repository {
  async Create (request) {
    // vai ler o fs e add um item
    const verifyRequest = await new CreateRouter().Route(request)
    return verifyRequest
  }

  async Load (request) {
    const verifyRequest = await new LoadRouter().Route(request)

    const users = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    let partner = null
    users.forEach(el => {
      if (Number(el.id) === Number(verifyRequest.body.id)) { partner = el }
    })

    return partner
  }

  async Search (request) {
    const verifyRequest = await new SearchRouter().Route(request)
    // vai encontrar a mais proxima

    return verifyRequest
  }
}
