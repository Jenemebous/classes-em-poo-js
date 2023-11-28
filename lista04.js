/*Q1 - Descrição: Representa uma pessoa com nome e idade, permitindo fazer aniversário e exibir detalhes da pessoa.
Classe/Objeto: Pessoa
Atributos: nome, idade.
Método:
fazAniversario() (soma mais um a idade da pessoa)
exibirDetalhes(): string (retorna uma string com informações sobre a pessoa, como "Nome: [nome] e Idade: [idade]") */

/*
let pessoa = { 
  nome: " ",
  idade: 0,
  fazAniversario: function(){
    this.idade++
  },
  exibirDetalhes: function(){
    return "Nome:  " + this.nome + ", Idade: " + this.idade;
}
}

pessoa.nome = "Claúdia";
pessoa.idade = 32;


console.log(pessoa.exibirDetalhes());
pessoa.fazAniversario();
console.log(pessoa.exibirDetalhes() + ", Feliz Aniversário");

*/
/*
class Pessoa {
    _nome 
    _idade

    constructor(nome, idade){
        this._nome = nome
        this._idade = idade
    }

    fazAniversario(){
        this._idade++
    }
    
    exibirDetalhes(){
        return ("Nome: " + this._nome + ", Idade: " + this._idade)
    }
}

let pessoa1 = new Pessoa("Débora", 44)

console.log(pessoa1)
console.log(pessoa1.exibirDetalhes()) 
pessoa1.fazAniversario() 
console.log(pessoa1.exibirDetalhes() + "Feliz Aniversário") */


/* Q2 - Descrição: Representa uma porta com cor, dimensões e informação sobre se está aberta ou fechada. Permite abrir, fechar,
pintar e verificar o status da porta.
Classe/Objeto: Porta
Atributos: aberta, cor, dimensaoX, dimensaoY, dimensaoZ
Métodos:
abre() (altera a propriedade aberta para true)
fecha() (altera a propriedade aberta para false)
pinta(s: String) - altera a cor da porta
estaAberta(): boolean (retorna o valor da propriedade aberta)
exibirDetalhes(): string (retorna uma string com informações sobre a porta, como "Cor: [cor], Dimensões: [dimensaoX,
dimensaoY, dimensaoZ] e Se está aberta: [true ou false]") */

/*
let porta = {
  aberta: false,
  cor: "",
  dimensaoX: "",
  dimensaoY: "",
  dimensaoZ: "",
  abre: function(){
    this.aberta = true;
  },
  fecha: function(){
    this.aberta = false;
  },
  pinta: function(novaCor){
    this.cor = novaCor
  },
  estaAberta: function(){
  return this.aberta
  },
  exibirDetalhes: function(){
    return "Cor da porta: " + this.cor + ", Dimensão 1: " + this.dimensaoX + ", Dimensão2: " + this.dimensaoY + ", Dimensão3: " + this.dimensaoZ + ", Porta aberta?: " + this.aberta;
  }
}

porta.cor = "Azul";
porta.dimensaoX = 12;
porta.dimensaoY = 15;
porta.dimensaoZ = 29;

porta.abre();
//console.log(porta)
console.log(porta.exibirDetalhes())

porta.fecha();
porta.pinta("Rosa");
//console.log(porta);
console.log(porta.exibirDetalhes());

/*Q3 - Descrição: Representa um livro com título, autor, ano de publicação, gênero e página atual. Permite avançar e voltar
páginas, além de exibir detalhes do livro.
Classe/Objeto: Livro
Atributos: titulo, autor, anoPublicacao, genero, paginaAtual

Métodos:
avancarPagina()
voltarPagina()
exibirDetalhes(): string (retorna uma string com informações sobre o livro, como "Título: [titulo], Autor: [autor], Ano
de Publicação: [anoPublicacao], Gênero: [genero], Página Atual: [paginaAtual]")
*/




/*Q4 - Descrição: Representa um animal com nome, espécie e idade, permitindo emitir som, envelhecer e exibir detalhes do
animal.
Classe/Objeto: Animal
Atributos: nome, especie, idade
Método:
emitirSom(som) - escreve na tela o som do animal
envelhecer() - adiciona mais um ano a idade do animal
exibirDetalhes(): string (retorna uma string com informações sobre o animal, como "Nome: [nome], Espécie: [espécie]
e Idade: [idade]")
*/

/*
class Animal{

    _nome
    _especie
    _idade

    constructor(nome, especie, idade){
       this._nome = nome
       this._especie = especie
       this._idade = idade
       
    }

    emitirSom(som){
       return ("Som: " + som)
    }

    envelhecer(){
        return this._idade++
    }

    exibirDetalhes(){
        return ("Nome: " + this._nome + ", Espécie: " + this._especie + ", Idade: " + this._idade)
    }
}

let cavalo = new Animal("Cavalo", "equídeos", 4 )

console.log(cavalo.exibirDetalhes())
console.log(cavalo.emitirSom("Iiiir"))
cavalo.envelhecer()
console.log(cavalo.exibirDetalhes())

*/




/*Q5 - Descrição: Representa uma playlist com nome, autor e músicas, permitindo adicionar, remover, listar músicas e obter a
quantidade de músicas.
Classe/Objeto: Playlist
Atributos: nome, autor, musicas (array de strings)
Métodos:
adicionarMusica(musica)
removerMusica(musica)
listarMusicas()
quantidadeDeMusicas(): number */

/*
class Playlist {
    _nome
    _musicas
    _autor

    constructor(nome, autor, musicas) {
        this._nome = nome;
        this._musicas = musicas;
        this._autor = autor;
    }

    adicionarMusica(musica) {
        this._musicas.push(musica);
    }

    removerMusica(musica) {
        const index = this._musicas.indexOf(musica);
        if (index !== -1) {
            this._musicas.splice(index, 1);
        }
    }

    listarMusicas() {
        return "Músicas: " + this._musicas.join(", ");
    }

    qtd_de_musicas() {
        return this._musicas.length;
    }
}

let playlist1 = new Playlist("Minha Playlist", "Eu", []);

playlist1.adicionarMusica("Música 1");
playlist1.adicionarMusica("Música 2");
playlist1.adicionarMusica("Música 3");

console.log(playlist1.listarMusicas());
console.log("Quantidade de músicas:", playlist1.qtd_de_musicas());

playlist1.removerMusica("Música 2");

console.log(playlist1.listarMusicas());
console.log("Quantidade de músicas:", playlist1.qtd_de_musicas());

*/







/*Q6 - Descrição: Representa um produto em um estoque de uma empresa, permitindo aumentar e diminuir a quantidade,
atualizar o preço e exibir informações do produto.
Classe/Objeto: estoque_de_produto (representa um produto em um estoque de uma empresa)
Atributos: nome, preco, quantidade
Métodos:
aumentarQuantidade(qtd) - representa um novo produto acrescentado no estoque
diminuirQuantidade(qtd) - represente um produto removido do estoque (vendido)
atualizarPreco(novoPreco) - muda o preço do produto no estoque
exibirInformacoes(): string (retorna uma string com informações sobre o produto, como "Nome: [nome], Preço:
[preco], Quantidade: [quantidade]") */





//CLASS



class Pessoa {
    _nome 
    _idade

    constructor(nome, idade){
        this._nome = nome
        this._idade = idade
    }

    fazAniversario(){
        this._idade++
    }
    
    exibirDetalhes(){
        return ("Nome: " + this._nome + ", Idade: " + this._idade)
    }
}

let pessoa1 = new Pessoa("Débora", 44)

console.log(pessoa1)
console.log(pessoa1.exibirDetalhes()) 
pessoa1.fazAniversario() 
console.log(pessoa1.exibirDetalhes())
