
const app = require('./src/config/app')
const port = 3001
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
