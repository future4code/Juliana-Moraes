import calculaIdadeEmDias from './exercicio2'

test('Verifica se calculaIdade calcula idade corretamente', () => {
    expect(calculaIdadeEmDias(1,0,0)).toBe(1)
    expect(calculaIdadeEmDias(0,1,0)).toBe(30)

})