const SearchRouter = require('../../src/api/presentation/search-partner.route')
const MissingParamsError = require('../../src/api/helpers/missingParams-error')

const makeSut = () => {
  return new SearchRouter()
}

describe('create partner', () => {
  test('Should return 400 if no address is provided', async () => {
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
        }
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(expect.not.objectContaining({
      address: {
        type: expect.anything(),
        coordinates: expect.anything()
      }
    }))
    expect(httpResponse.err).toEqual(new MissingParamsError('address'))
  })

  test('Should return 200 if id is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        address: {
          type: 'any',
          coordinates: 'any'
        }
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual(expect.objectContaining({
      id: expect.anything(),
      tradingName: expect.anything(),
      ownerName: expect.anything(),
      document: expect.anything(),
      coverageArea: {
        type: expect.anything(),
        coordinates: expect.anything()
      },
      address: {
        type: expect.anything(),
        coordinates: expect.anything()
      }
    }))
  })
})
