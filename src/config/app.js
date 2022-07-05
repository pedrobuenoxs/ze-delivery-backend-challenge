const express = require('express')
const router = require('../api/routes/routes')

const app = express()
app.use(express.json())

const port = 3000

app.use('/api', router)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
