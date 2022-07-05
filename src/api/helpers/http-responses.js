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
      body: {
        id: '1',
        tradingName: 'Adega da Cerveja - Pinheiros',
        ownerName: 'Zé da Silva',
        document: '1432132123891/0001',
        coverageArea: {
          type: 'MultiPolygon',
          coordinates: [
            [[[30, 20], [45, 40], [10, 40], [30, 20]]],
            [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
          ]
        },
        address: {
          type: 'Point',
          coordinates: [-46.57421, -21.785741]
        }
      },
      statusCode: 200
    }
  }

  static searched (httpRequest) {
    return {
      body: {
        id: '1',
        tradingName: 'Adega da Cerveja - Pinheiros',
        ownerName: 'Zé da Silva',
        document: '1432132123891/0001',
        coverageArea: {
          type: 'MultiPolygon',
          coordinates: [
            [[[30, 20], [45, 40], [10, 40], [30, 20]]],
            [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
          ]
        },
        address: {
          type: 'Point',
          coordinates: [-46.57421, -21.785741]
        }
      },
      statusCode: 200
    }
  }
}
