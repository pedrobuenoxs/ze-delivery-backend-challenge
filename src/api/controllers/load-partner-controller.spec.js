const LoadRouter = require('./load-partner-controller')
const MissingParamsError = require('../helpers/missingParams-error')

const makeSut = () => {
  return new LoadRouter()
}

describe('create partner', () => {
  test('Should return 400 if no id is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      params: {}
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(expect.not.objectContaining({ id: 'any_id' }))
    expect(httpResponse.err).toEqual(new MissingParamsError('id'))
  })

  test('Should return 200 if id is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      params: {
        id: '1'
      }
    }
    const httpResponse = await sut.Route(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual(expect.objectContaining({
      id: expect.anything()
    }))
  })
})
