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

    //Com iterações via o forEach, a empresa mostra as informações dos clientes.
    detalhe() {
        let detalhes = `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n-----------------\n`;
        this.clientes.forEach(cliente => {
            detalhes += `Nome: ${cliente.nome} \nEstado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
            cliente.telefones.forEach(telefone => {
                detalhes += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`;
            });
            detalhes += "\n";
        });
        return detalhes;
    }
}

const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1000);

const empresa = new Empresa("Telefonica Ltda", "Telefonica", "12345678000190", enderecoEmpresa);

const telefoneEmpresa1 = new Telefone(11, "987654321");
const telefoneEmpresa2 = new Telefone(11, "912345678");

empresa.telefones.add(telefoneEmpresa1);
empresa.telefones.add(telefoneEmpresa2);

const claudio = new Cliente("Claudio", "12344678991", new Endereco("SP", "São Paulo", "Rua Almiranda", 10));
claudio.telefones.add(new Telefone(11, "900000001"));
claudio.telefones.add(new Telefone(11, "911111111"));
empresa.clientes.add(claudio);

const ana = new Cliente("Ana", "12344678992", new Endereco("RJ", "Rio de Janeiro", "Rua Mauricio Lopez", 20));
ana.telefones.add(new Telefone(21, "900000002"));
ana.telefones.add(new Telefone(21, "911111112"));
empresa.clientes.add(ana);

const fernando = new Cliente("Fernando", "12344678993", new Endereco("MG", "Belo Horizonte", "Rua São Francisco", 30));
fernando.telefones.add(new Telefone(31, "900000003"));
fernando.telefones.add(new Telefone(31, "911111113"));
empresa.clientes.add(fernando);

const diego = new Cliente("Diego", "12344678994", new Endereco("MT", "Cuiabá", "Rua Vincius Rodrigues", 40));
diego.telefones.add(new Telefone(65, "900000004"));
diego.telefones.add(new Telefone(65, "911111114"));
empresa.clientes.add(diego);

const joana = new Cliente("Joana", "12344678995", new Endereco("PE", "São Lorenço da Mata", "Rua Joaquim Monteiro", 50));
joana.telefones.add(new Telefone(81, "900000005"));
joana.telefones.add(new Telefone(81, "911111115"));
empresa.clientes.add(joana);

console.log(empresa.detalhe());