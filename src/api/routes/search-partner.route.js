const express = require('express')
const router = express.Router()

router.get('/get/:lat&long', (req, res) => {
  res.send('Get by ID API')
})

module.exports = router
