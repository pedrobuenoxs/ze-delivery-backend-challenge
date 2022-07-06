const CreateRouter = require('../controllers/create-partner-controller')

module.exports = async (request, response) => {
  response.json(await new CreateRouter().Route(request))
}
