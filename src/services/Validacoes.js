class Validacoes{
    
    static validaNome(string){
        if(string.length >= 3){
            return true
        } else {
            return false
        }
    }
    static validaValor(valor){
        if(valor >= 0.1){
            return true
        } else {
            return false
        }
    }
}

export default Validacoes;