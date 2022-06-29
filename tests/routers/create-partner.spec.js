class CreateRouter {
  Route (httpRequest) {
    if (!httpRequest || !httpRequest.body) return { statusCode: 500 }
    const { id, tradingName, ownerName, document, coverageArea, address } = httpRequest.body
    if (!id ||
      !tradingName ||
      !ownerName ||
      !document ||
      !coverageArea ||
      !address) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('create partner', () => {
  test('Should return 400 if no trading name is provided', () => {
    const sut = new CreateRouter()
    const httpRequest = {
      body: {
        id: 1,
        tradingName: false,
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
      }
    }
    const httpResponse = sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 400 if no owner name is provided', () => {
    const sut = new CreateRouter()
    const httpRequest = {
      body: {
        id: 1,
        tradingName: 'Adega da Cerveja - Pinheiros',
        ownerName: false,
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
      }
    }
    const httpResponse = sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 400 if no document is provided', () => {
    const sut = new CreateRouter()
    const httpRequest = {
      body: {
        id: 1,
        tradingName: 'Adega da Cerveja - Pinheiros',
        ownerName: 'Zé da Silva',
        document: false,
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
      }
    }
    const httpResponse = sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 400 if no coverage area is provided', () => {
    const sut = new CreateRouter()
    const httpRequest = {
      body: {
        id: 1,
        tradingName: 'Adega da Cerveja - Pinheiros',
        ownerName: 'Zé da Silva',
        document: '1432132123891/0001',
        coverageArea: false,
        address: {
          type: 'Point',
          coordinates: [-46.57421, -21.785741]
        }
      }
    }
    const httpResponse = sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 400 if no coverage area is provided', () => {
    const sut = new CreateRouter()
    const httpRequest = {
      body: {
        id: 1,
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
        address: false
      }
    }
    const httpResponse = sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 500 if no http request is provided', () => {
    const sut = new CreateRouter()
    const httpResponse = sut.Route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if no http has no body', () => {
    const sut = new CreateRouter()
    const httpRequest = { }
    const httpResponse = sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
