const HttpResponse = require('../helpers/http-responses')
module.exports = class CreateRouter {
  async Route (httpRequest) {
    // if (!httpRequest || !httpRequest.body) return HttpResponse.serverError()
    try {
      const { id, tradingName, ownerName, document, coverageArea, address } = httpRequest.body
      if (!id) return HttpResponse.badRequest('id')
      if (!tradingName) return HttpResponse.badRequest('tradingName')
      if (!ownerName) return HttpResponse.badRequest('ownerName')
      if (!document) return HttpResponse.badRequest('document')
      if (!coverageArea || coverageArea.type !== 'MultiPolygon') return HttpResponse.badRequest('coverageArea', httpRequest.body)
      if (!address || address.type !== 'Point') return HttpResponse.badRequest('address', httpRequest.body)
    } catch (error) {
      return HttpResponse.serverError()
    }

    return HttpResponse.created(httpRequest)
  }
}
