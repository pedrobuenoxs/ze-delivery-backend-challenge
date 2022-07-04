const HttpResponse = require('../helpers/http-responses')

module.exports = class LoadRouter {
  async Route (httpRequest) {
    const { id } = httpRequest.body
    if (!id) return HttpResponse.badRequest('id')
    return HttpResponse.loaded(httpRequest)
  }
}
