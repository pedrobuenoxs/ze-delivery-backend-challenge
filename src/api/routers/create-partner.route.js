const HttpResponse = require('../helpers/http-responses')
module.exports = class CreateRouter {
  Route (httpRequest) {
    if (!httpRequest || !httpRequest.body) return HttpResponse.serverError()
    const { id, tradingName, ownerName, document, coverageArea, address } = httpRequest.body
    if (!id) return HttpResponse.badRequest('id')
    if (!tradingName) return HttpResponse.badRequest('tradingName')
    if (!ownerName) return HttpResponse.badRequest('ownerName')
    if (!document) return HttpResponse.badRequest('document')
    if (!coverageArea) return HttpResponse.badRequest('coverageArea')
    if (!address) return HttpResponse.badRequest('address')
  }
}
