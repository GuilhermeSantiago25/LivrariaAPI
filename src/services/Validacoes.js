class Validacoes{
    /**
     * 
     * @param {string} string 
     * @returns boolean
     */
    static validaNome(string){
        if(string.length >= 3){
            return true
        } else {
            return false
        }
    }
    
    static validaCPF(cpf){
        const cpfNum = parseInt(cpf)
        if(cpf.length == 11 && cpfNum == cpf){
            return true
        } else {
            return false
        }
    }

    static validaTelefone(telefone){
        const telefoneNum = parseInt(telefone)
        if(telefone.length == 11 && telefoneNum == telefone){
            return true
        } else {
            return false
        }
    }
}

export default Validacoes;
