const HttpResponse = require('../helpers/http-responses')

module.exports = class SearchRouter {
  async Route (httpRequest) {
    const { long, lat } = httpRequest.params
    if (!long) return HttpResponse.badRequest('address')
    if (!lat) return HttpResponse.badRequest('address')

    return HttpResponse.searched(httpRequest)
  }
}
