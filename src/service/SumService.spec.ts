import { SumService } from 'src/service/SumService'

describe('SumService', () => {
  it('should sum two numbers', () => {
    // given

    // when
    const result = SumService.sum(2, 3)

    // then
    expect(result).toBe(5)
  })
})
