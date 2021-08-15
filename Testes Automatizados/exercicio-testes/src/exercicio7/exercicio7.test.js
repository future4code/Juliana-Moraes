import diretoAposentadoria from './exercicio7'

test('Tem direito a se aposentar', () => {
    expect(diretoAposentadoria(1957, 1971)).toBe(true)
    expect(diretoAposentadoria(1987, 2011)).toBe(false)
    expect(diretoAposentadoria(1900, 1930)).toBe(true)
    expect(diretoAposentadoria(0, 2021)).toBe(true)
  })