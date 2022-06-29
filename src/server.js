const express = require('express')
const app = express()
const port = 3000
const routes = require('./api/routes/routes')

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.use(express.json())

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
