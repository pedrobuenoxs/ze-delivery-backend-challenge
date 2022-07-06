const MissingParamsError = require('./missingParams-error')

module.exports = class HttpResponse {
  static badRequest (paramName, httpRequest) {
    return {
      statusCode: 400,
      err: new MissingParamsError(paramName),
      body: httpRequest
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static created (httpRequest) {
    return {
      body: httpRequest.body,
      statusCode: 201
    }
  }

  static loaded (httpRequest) {
    return {
      body: httpRequest.params,
      statusCode: 200
    }
  }

  static searched (httpRequest) {
    return {
      body: httpRequest.params,
      statusCode: 200
    }
  }
}
