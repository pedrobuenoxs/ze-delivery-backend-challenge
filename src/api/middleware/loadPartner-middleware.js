// const CreateRouter = require('../presentation/create-partner.route')
const PartnerRepository = require('../repositories/partner-repository')

module.exports = async (request, response) => {
  // response.json(await new CreateRouter().Route(request))
  const { id } = request.params

  response.json(await new PartnerRepository().Load(Number(id)))
}
