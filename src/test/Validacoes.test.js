import Validacoes from "../services/Validacoes.js";

test("Validar se o produto tem pelo menos 3 caracteres.", ()=>{
    expect(Validacoes.validaNome("lapis")).toBe(true)
})
test("Validar se o valor é maior do que 0.1 centavos", ()=>{
    expect(Validacoes.validaValor("123456.12")).toBe(true)
})
// test("Validar se o número de telefone tem 11 digitos", ()=>{
//     expect(Validacoes.validaTelefone("1234a567891")).toBe(false)
// })
// test("Validar se o número de telefone tem 11 digitos", ()=>{
//     expect(Validacoes.validaTelefone("1234567891")).toBe(false)
// })