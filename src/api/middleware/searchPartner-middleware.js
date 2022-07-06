const PartnerRepository = require('../repositories/partner-repository')

module.exports = async (request, response) => {
  response.json(await new PartnerRepository().Search(request))
}
