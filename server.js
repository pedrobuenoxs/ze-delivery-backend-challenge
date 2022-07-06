// TODO =  preciso trazer o server.listen() pra cá

const app = require('./src/config/app')
const port = 3000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
