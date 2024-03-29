/*
  Cria uma lista de pacientes

  Cada paciente deverá conter
    nome
    idade
    peso
    altura
  
  Escreva uma lista contendo o nome dos pacientes

 */

// Feito pelo Mayk e copiado



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

arrayPatients = ''

i = 1

for (patient of patients){
  arrayPatients += (`Paciente ${[i]}: Nome: ${patient.nam} , idade: ${patient.age} , peso: ${patient.wheight} kg , altura: ${patient.height} cm \n`)
  i ++
}

alert(arrayPatients)