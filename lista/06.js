//6

function imc_g(peso, altura) {
  return peso / (altura * altura);
}

let pesos = [];
let alturas = [];

for (let i=0; i <= 4; i++) {
  let peso = parseFloat(prompt("Digite o peso da pessoa (Digite 0 para sair):"));
  let altura = parseFloat(prompt("Digite a altura da pessoa (Digite 0 para sair):"));
  
  if (peso === 0 || altura === 0) {
    break;
  }

  pesos.push(peso);
  alturas.push(altura);
}

let somaIMC = 0;
for (let i = 0; i < pesos.length; i++) {
  let imc = imc_g(pesos[i], alturas[i]);
  somaIMC += imc;
  console.log("Pessoa " + (i + 1) + " - Peso: " + pesos[i] + " | Altura: " + alturas[i] + " | IMC: " + imc.toFixed(2));
}

let mediaIMC = somaIMC / pesos.length;
console.log("Média dos IMC: " + mediaIMC.toFixed(2));

console.log("Pessoas com IMC menor que a média:");
for (let i = 0; i < pesos.length; i++) {
  let imc = imc_g(pesos[i], alturas[i]);
  if (imc < mediaIMC) {
    console.log("Pessoa " + (i + 1) + " - Peso: " + pesos[i] + " | Altura: " + alturas[i] + " | IMC: " + imc.toFixed(2));
  }
}


