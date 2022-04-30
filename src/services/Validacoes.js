class Validacoes{
    /**
     * 
     * @param {string} string 
     * @returns boolean
     */
    static validaNome(string){
        if(string.length >= 1){
            return true
        } else {
            return false
        }
    }
    static validaValor(valor){
        if(valor.length >= 0.1){
            return true
        } else {
            return false
        }
    }
}

export default Validacoes;