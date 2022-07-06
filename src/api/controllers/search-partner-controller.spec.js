const SearchRouter = require('./search-partner-controller')
const MissingParamsError = require('../helpers/missingParams-error')

const makeSut = () => {
  return new SearchRouter()
}

describe('create partner', () => {
  test('Should return 400 if no address is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      params: {

      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(expect.not.objectContaining({
      long: expect.anything(),
      lat: expect.anything()
    }))
    expect(httpResponse.err).toEqual(new MissingParamsError('address'))
  })

  test('Should return 200 if id is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      params: {
        long: '1',
        lat: '2'
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual(expect.objectContaining({
      long: expect.anything(),
      lat: expect.anything()
    }))
  })
})
