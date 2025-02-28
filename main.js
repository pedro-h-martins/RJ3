class Cliente {
    #cpf 
    constructor(nome, cpf, endereco) {
        this.nome = nome 
        this.endereco = endereco 
        this.telefones = new Set() 
        this.#cpf = cpf 
    }
 
    get cpf() {
        return this.#cpf;
    }
 
    getNomeUpper() {
        return this.nome.toUpperCase();
    }
 
    getNomeLower() {
        return this.nome.toLowerCase();
    }
 
    getEnderecoUpper() {
        return JSON.stringify(this.endereco).toUpperCase();
    }
 
    getEnderecoLower() {
        return JSON.stringify(this.endereco).toLowerCase();
    }
}
 
class Telefone { 
    constructor(ddd, numero) { 
        this.ddd = ddd 
        this.numero = numero
    }
 
    getDDDUpper() {
        return this.ddd.toString().toUpperCase();
    }
 
    getDDDLower() {
        return this.ddd.toString().toLowerCase();
    }
 
    getNumeroUpper() {
        return this.numero.toString().toUpperCase();
    }
 
    getNumeroLower() {
        return this.numero.toString().toLowerCase();
    }
}

class Endereco{ 
    constructor(estado, cidade, rua, numero) { 
        this.estado = estado 
        this.cidade = cidade 
        this.rua = rua 
        this.numero = numero 
    }
 
    getEstadoUpper() {
        return this.estado.toUpperCase();
    }
 
    getEstadoLower() {
        return this.estado.toLowerCase();
    }
 
    getCidadeUpper() {
        return this.cidade.toUpperCase();
    }
 
    getCidadeLower() {
        return this.cidade.toLowerCase();
    }
 
    getRuaUpper() {
        return this.rua.toUpperCase();
    }
 
    getRuaLower() {
        return this.rua.toLowerCase();
    }
 
    getNumeroUpper() {
        return this.numero.toString().toUpperCase();
    }
 
    getNumeroLower() {
        return this.numero.toString().toLowerCase();
    }
}
 
class Empresa { 
    #cnpj 
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) { 
        this.endereco = endereco 
        this.nomeFantasia = nomeFantasia 
        this.razaoSocial = razaoSocial 
        this.#cnpj = cnpj 
        this.clientes = new Set() 
        this.telefones = new Set() 
    } 
 
    get cnpj() {
        return this.#cnpj;
    }
 
    getRazaoSocialUpper() {
        return this.razaoSocial.toUpperCase();
    }
 
    getRazaoSocialLower() {
        return this.razaoSocial.toLowerCase();
    }
 
    getNomeFantasiaUpper() {
        return this.nomeFantasia.toUpperCase();
    }
 
    getNomeFantasiaLower() {
        return this.nomeFantasia.toLowerCase();
    }
 
    getEnderecoUpper() {
        return JSON.stringify(this.endereco).toUpperCase();
    }
 
    getEnderecoLower() {
        return JSON.stringify(this.endereco).toLowerCase();
    }
}