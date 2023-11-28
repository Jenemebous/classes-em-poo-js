// 5

const pessoas = [];

for (let i = 0; i < 10; i++) {
  let peso = prompt("Digite o peso da pessoa (kg): ");
  let altura = prompt("Digite a altura da pessoa: ");

  pessoas.push({ peso: parseFloat(peso), altura: parseFloat(altura) });
}

const imcs = pessoas.map((pessoa) => pessoa.peso / (pessoa.altura * pessoa.altura));
const mediaIMC = imcs.reduce((total, valor) => total + valor, 0) / imcs.length;

const quantidadeAcimaDaMedia = imcs.filter((valor) => valor > mediaIMC).length;

console.log("Valor médio dos IMC: " + mediaIMC.toFixed(1));
console.log("Quantidade de pessoas acima da média: " + quantidadeAcimaDaMedia); 