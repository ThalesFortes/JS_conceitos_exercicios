/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo do Imc

*/
const patients = [
  {
    nam:'Thales',
    age: 32 ,
    wheight: 62.3,
    height: 180 
  },
  {
    nam:'Tamires',
    age: 25,
    wheight: 70.5,
    height: 160
  },
  {
    nam:'Carol',
    age: 36,
    wheight: 95.8 ,
    height: 178
  }
]


function printImcPatients (patients){
  arrayPatients = ''
  i = 1
  let imc;
  for (patient of patients){
    imc = (patient.wheight/((patient.height / 100) **2))
    arrayPatients += (`O paciente ${i} que se chama ${patient.nam}, tem ${patient.age} anos,e o seu imc é: ${imc.toFixed(2)} \n`)
    i ++
  }
  return arrayPatients 
}


alert(printImcPatients(patients))

