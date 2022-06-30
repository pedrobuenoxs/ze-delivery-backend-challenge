const CreateRouter = require('../../src/api/routers/create-partner.route')
const MissingParamsError = require('../../src/api/helpers/missingParams-error')

describe('create partner', () => {
  test('Should return 400 if no id is provided', () => {
    const sut = new CreateRouter()
    const httpRequest = {
      body: {
        id: false,
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
    const httpResponse = sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('id'))
  })

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
    expect(httpResponse.body).toEqual(new MissingParamsError('tradingName'))
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
    expect(httpResponse.body).toEqual(new MissingParamsError('ownerName'))
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
    expect(httpResponse.body).toEqual(new MissingParamsError('document'))
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
    expect(httpResponse.body).toEqual(new MissingParamsError('coverageArea'))
  })

  test('Should return 400 if no address area is provided', () => {
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
    expect(httpResponse.body).toEqual(new MissingParamsError('address'))
  })

  test('Should return 500 if no http request is provided', () => {
    const sut = new CreateRouter()
    const httpResponse = sut.Route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if http has no body', () => {
    const sut = new CreateRouter()
    const httpRequest = { }
    const httpResponse = sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
