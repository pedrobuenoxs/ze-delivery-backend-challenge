const Repository = require('./partner-repository')

const makeSut = () => {
  return new Repository()
}

describe('Partner Repository', () => {
  test('Load function return a valid user', async () => {
    const fakeRepository = makeSut()
    const load = await fakeRepository.Load(10)
    expect(load.id).toBe('10')
  })
})
