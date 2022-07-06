const path = require('path')
const fs = require('fs')
const dataPath = path.resolve(__dirname, '../db/pdvs.json')
module.exports = class Repository {
  async Create (partner) {
    // vai ler o fs e add um item

  }

  async Load (id) {
    // vai reportar pelo id
    const users = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    let partner = null
    users.forEach(el => {
      if (Number(el.id) === id) { partner = el }
    })

    return partner
  }

  async Search (long, lat) {
    // vai encontrar a mais proxima
  }
}
