import Validacoes from "../services/Validacoes.js";

test("Validar se o nome tem pelo menos 3 caracteres.", ()=>{
    expect(Validacoes.validaNome("Ana")).toBe(true)
});
