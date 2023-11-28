/*function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.cumprimentar = function() {
        return "Olá, meu nome é " + this.nome;
    };
}

const pessoa1 = new Pessoa("Alice", 25);
const pessoa2 = new Pessoa("Bob", 30);

pessoa1.cumprimentar();*/


class Pessoa 
{

    _nome
    _idade 
    _peso
    _altura
    _imc
  
    constructor(nome, idade, peso, altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)

    }

    calculaImc(){
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }

    get nome (){
        return this._nome
    }

    get imc (){
     return (this._peso / (this._altura * this._altura)).toFixed(2);
    }

    get idade (){
        return this._idade
    }

    get altura (){
        return this._altura
    }

    get peso (){
        return this._peso
    }


    set nome(novoNome){
        this._nome = novoNome
    }
    
    set idade(novaIdade){
        this._idade = novaIdade
    }

    set peso(novoPeso){
        this._peso = novoPeso
    }

    set altura(novaAltura){
        this._altura = novaAltura
    }

    
    set imc(novoImc){
        this._imc = novoImc
    }
}

let pessoa1 = new Pessoa('Vanessa da Mata', 37, 59, 1.65)
let pessoa2 = new Pessoa('Maria', 62, 73.4, 1.65)
let pessoa3 = new Pessoa('Maria Bethânia', 77, 59, 1.65)
let pessoa4 = new Pessoa('Maria Van', 22, 63.4, 1.75)

console.log("Nome " + pessoa1.nome)
console.log("Idade " + pessoa1.idade)
console.log("Imc " + pessoa1.imc)
console.log("Peso: " + pessoa1.peso)
console.log("Altura: " + pessoa1.altura)

pessoa1.nome = "Vanessa da Mata"
pessoa1.idade = "39"
pessoa1.altura = 1.66
pessoa1.peso = 62

console.log("Nome " + pessoa1.nome)
console.log("Idade " + pessoa1.idade)
console.log("Imc " + pessoa1.imc)
console.log("Peso: " + pessoa1.peso)
console.log("Altura: " + pessoa1.altura)