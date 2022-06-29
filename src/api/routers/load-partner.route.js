const express = require('express')
const router = express.Router()

router.get('/getOne/:id', (req, res) => {
  res.send('Get by ID API')
})

module.exports = router
