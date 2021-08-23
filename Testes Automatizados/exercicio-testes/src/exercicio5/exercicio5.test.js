import idadeVotacao from './exercicio5'

test('idadeVotacao', () => {
    expect(idadeVotacao(1987, 2021)).toBe(true)
    expect(idadeVotacao(1900, 2021)).toBe(true)
    expect(idadeVotacao(2021, 2021)).toBe(false)
  })