function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    //essa é uma arrow function
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

let p1 = new Pessoa ('Carlos', 'Araújo')
let p2 = new Pessoa ('Lanny', 'Menezes')

Pessoa.prototype.aqui = 'ola'

let data = new Date()

console.log(p1.nomeCompleto())
console.log(data)