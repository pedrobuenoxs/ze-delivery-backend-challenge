const express = require('express')
const router = express.Router()

class CreatePartner {
  async Route (req, res) {
    res.send('Post API')
  }
}

// Post Method
router.post('/post', new CreatePartner().Route)

module.exports = router
