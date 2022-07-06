const HttpResponse = require('../helpers/http-responses')

module.exports = class LoadRouter {
  async Route (data) {
    const { id } = data.params
    if (!id) return HttpResponse.badRequest('id')
    return HttpResponse.loaded(data)
  }
}
