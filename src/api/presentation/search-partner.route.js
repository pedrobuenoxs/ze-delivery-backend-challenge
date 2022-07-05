const HttpResponse = require('../helpers/http-responses')

module.exports = class SearchRouter {
  async Route (httpRequest) {
    const { address } = httpRequest.body
    if (!address) return HttpResponse.badRequest('address')

    return HttpResponse.searched(httpRequest)
  }
}
