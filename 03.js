//3 

function imc_g(imc){
  if(imc<17) {
    console.log("Muito Abaixo do peso");
  } 
  else if(imc >= 17 && imc <= 18.49){
    console.log("Abaixo do Peso");
  }
  else if(imc >= 18,50 && imc <= 24.99){
    console.log("Peso Normal");
  }
  else if(imc >= 25 && imc <= 29.99){
    console.log("Acima do Peso");
  }
  else if(imc >= 30 && imc <= 34.99){
    console.log("Obesidade I")
  }
  else if(imc >= 35 && imc <= 39.99){
    console.log("Obesidade II (severa)")
  }
  else if(imc >= 40){
    console.log("Obesidade III (mórbida)")
  }
}
var imc = 27

imc_g(imc)
