const CreateRouter = require('../../src/api/presentation/create-partner.route')
const MissingParamsError = require('../../src/api/helpers/missingParams-error')

const makeSut = () => {
  return new CreateRouter()
}

describe('create partner', () => {
  test('Should return 400 if no id is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
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
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.err).toEqual(new MissingParamsError('id'))
  })

  test('Should return 400 if no trading name is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        id: 1,
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
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.err).toEqual(new MissingParamsError('tradingName'))
  })

  test('Should return 400 if no owner name is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        id: 1,
        tradingName: 'Adega da Cerveja - Pinheiros',
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
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.err).toEqual(new MissingParamsError('ownerName'))
  })

  test('Should return 400 if no document is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        id: 1,
        tradingName: 'Adega da Cerveja - Pinheiros',
        ownerName: 'Zé da Silva',
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
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.err).toEqual(new MissingParamsError('document'))
  })

  test('Should return 400 if no coverage area is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        id: 1,
        tradingName: 'Adega da Cerveja - Pinheiros',
        ownerName: 'Zé da Silva',
        document: '1432132123891/0001',
        address: {
          type: 'Point',
          coordinates: [-46.57421, -21.785741]
        }
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.err).toEqual(new MissingParamsError('coverageArea'))
  })

  test('Should return 400 if coverage area does not follow GeoJSON MultiPolygon ', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        id: 1,
        tradingName: 'Adega da Cerveja - Pinheiros',
        ownerName: 'Zé da Silva',
        document: '1432132123891/0001',
        coverageArea: {
          type: 'not_MultiPolygon',
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
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.coverageArea.type).toEqual(httpRequest.body.coverageArea.type)
  })
  test('Should return 400 if address area does not follow GeoJSON Point ', async () => {
    const sut = makeSut()
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
        address: {
          type: 'not_Point',
          coordinates: [-46.57421, -21.785741]
        }
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.address.type).toEqual(httpRequest.body.address.type)
  })

  test('Should return 400 if no address area is provided', async () => {
    const sut = makeSut()
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
        }
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.err).toEqual(new MissingParamsError('address'))
  })

  test('Should return 500 if no http request is provided', async () => {
    const sut = makeSut()
    const httpResponse = await sut.Route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if http has no body', async () => {
    const sut = new CreateRouter()
    const httpRequest = { }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
  test('Should return 201 if request has no problems', async () => {
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
        address: {
          type: 'Point',
          coordinates: [-46.57421, -21.785741]
        }
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(201)
  })
})
