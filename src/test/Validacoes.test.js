import Validacoes from "../services/Validacoes.js";

test("Validar se o nome tem pelo menos 3 caracteres.", ()=>{
    expect(Validacoes.validaNome("Ana")).toBe(true)
});


test("Validar se o número de telefone tem 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("12345678910")).toBe(true)
});
test("Validar se o número de telefone tem 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("1234a567891")).toBe(false)
});
test("Validar se o número de telefone tem 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("1234567891")).toBe(false)
});


test("Validar se o número do cpf tem 11 digitos", ()=>{
    expect(Validacoes.validaCPF("12345678910")).toBe(true)
});
test("Validar se o número de telefone tem 11 digitos", ()=>{
    expect(Validacoes.validaCPF("1234a567891")).toBe(false)
});
test("Validar se o número de telefone tem 11 digitos", ()=>{
    expect(Validacoes.validaCPF("1234567891")).toBe(false)
});