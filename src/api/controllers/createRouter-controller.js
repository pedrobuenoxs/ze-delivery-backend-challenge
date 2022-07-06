const CreateRouter = require('../presentation/create-partner.route')

module.exports = async (request, response) => {
  response.json(await new CreateRouter().Route(request))
}
