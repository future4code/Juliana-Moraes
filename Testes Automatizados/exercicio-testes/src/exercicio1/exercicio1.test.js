import pegaAntecessor from '../exercicio1/exercicio1'

test('Verifica se pegaAntecessor retorna o número antecessor', () => {
    expect(pegaAntecessor(1)).toBe(0)
    expect(pegaAntecessor(2)).toBe(1)
    expect(pegaAntecessor(0)).toBe(-1)
    expect(pegaAntecessor(100)).toBe(99)
    expect(pegaAntecessor(-100)).toBe(-101)
    expect(pegaAntecessor(5)).toBe(4)
  })