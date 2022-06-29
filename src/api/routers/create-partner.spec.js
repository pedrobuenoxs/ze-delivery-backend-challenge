class CreateRouter {
  Route (httpRequest) {
    if (!httpRequest.body.id) {
      return {
        statusCode: 400
      }
    }
  }
}

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
  })
})
