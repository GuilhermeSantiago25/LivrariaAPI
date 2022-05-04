import Validacoes from "../services/Validacoes.js";

test("Validar se o produto tem pelo menos 3 caracteres.", ()=>{
    expect(Validacoes.validaNome("lapis")).toBe(true)
})
test("Validar se o valor é maior do que 0.1 centavos", ()=>{
    expect(Validacoes.validaValor("123456.12")).toBe(true)
})