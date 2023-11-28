/* 2. Escreva um código em JavaScript que cria um objeto chamado "agenda" com a propriedade "contatos", que é um array
vazio. Crie um método chamado "adicionarContato" que recebe um objeto de contato como parâmetro e adiciona esse
objeto ao array "contatos". */ 


let agenda = {
    contatos: [], 
    adicionarContato: function(obj){
      this.contatos.push(obj)

    }
 }

agenda.adicionarContato({
   nome: "Marcela",
   telefone: 88794723,
 })


console.log(agenda.contatos) 
