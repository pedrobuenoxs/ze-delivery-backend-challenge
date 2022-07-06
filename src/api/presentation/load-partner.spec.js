const LoadRouter = require('../../src/api/presentation/load-partner.route')
const MissingParamsError = require('../../src/api/helpers/missingParams-error')

const makeSut = () => {
  return new LoadRouter()
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
    expect(httpResponse.body).toEqual(expect.not.objectContaining({ id: 'any_id' }))
    expect(httpResponse.err).toEqual(new MissingParamsError('id'))
  })

  test('Should return 200 if id is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        id: '1'
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
