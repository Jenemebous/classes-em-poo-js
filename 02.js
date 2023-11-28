// 2

let peso = prompt("Digite seu peso:");
let altura = prompt("Digite sua altura:");
function imc_f(peso, altura){
  
  let imc = peso / (altura * altura);
  console.log("IMC:" + imc.toFixed(2))
}
imc_f(peso, altura)
