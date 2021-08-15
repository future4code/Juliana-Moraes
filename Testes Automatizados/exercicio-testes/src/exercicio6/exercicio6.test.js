import ladosTriangulo from "./exercicio6";

test('Forma um triangulo', () => {
    expect(ladosTriangulo(0, 0, 0)).toBe(false)
    expect(ladosTriangulo(1, 1, 1)).toBe(true)
    expect(ladosTriangulo(3, 4, 5)).toBe(true)
    expect(ladosTriangulo(10, 11, 12)).toBe(true)
  })