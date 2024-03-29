/*
  Cria uma lista de pacientes

  Cada paciente deverá conter
    nome
    idade
    peso
    altura
  
  Escreva uma lista contendo o nome dos pacientes

 */

//Feito por mim com pesquisa e CHATGPT


  const arrayPatients = new Array()

  function Patients(nam,age,weight,height){
    this.nam = nam
    this.age = age
    this.weight = weight 
    this.height = height
  };
  
  let newPatients;
  let option;
  
  while (option != 4){
       option = Number(prompt(`Selecione a opção que deseja
        
        1. Inserir paciente
        2. Mostrar pacientes
        3. Remover pacientes
        4. Sair do aplicatico`)) 
  
      switch (option){
        case 1:
          let age = NaN;
          let weight = NaN;
          let height = NaN;
          nam = prompt("Insira o nome do paciente:")
          while (isNaN(age)){
            age = Number(prompt("Insira a idade do paciente:"))
            if (isNaN(age)){
              alert("Insira uma idade válida")
            } 
          }
          while (isNaN(weight)){
            weight = prompt("Insira o peso do paciente")
            weight = Number(weight.replace(',', '.'))
            if (isNaN(weight)){ 
              alert("Insira um peso válido")
            }
          }
          while (isNaN(height)){
            height = prompt("Insira a altura do paciente")
            height = Number(height.replace(',', '.'))
            if (isNaN(height)){
              alert("Insira uma altura válida")
            }
          }
          arrayPatients.push(newPatients = new Patients(nam,age,weight,height))
          alert("Paciente inserido com sucesso!")
          break
        
        case 2:
          if (arrayPatients !== 0){
            let allPatientsInfo = ''
            arrayPatients.forEach((pat,i) =>{
              const values = Object.values(pat);
              const key = Object.keys(pat)
              let patientInfo = ''
              for (j = 0; j < values.length; j++){
                patientInfo += (`${key[j]}: ${values[j]}, `)
              }
              allPatientsInfo += (`Paciente ${i}: ${patientInfo.slice(0,-2)} \n`)
            })
            alert(allPatientsInfo)
          } else {
            alert("Não há pacientes cadastrados")
          }
          break

        case 3:
          if(arrayPatients !== 0){
            deletePatientName = prompt("Insira o nome do paciente que quer deletar")
            let indexPatient = -1
            for(j = 0; j < arrayPatients.length; j++ ){
              if (deletePatientName == arrayPatients[j].nam){
                indexPatient = j
                alert(`O paciente ${arrayPatients[j].nam} foi removido da lista`)
                arrayPatients.splice(indexPatient,1)
                
                break
              } else {
                alert(`O paciente inserido não existe`)
              }
            }
          } else {
            alert("A lista esta vazia!!")
          }
          break

        case 4:
          alert("Aplicação encerrada, até logo!!")
          break
        
        default:
          alert("Insira uma opção válida por favor.")
          break
          }
  }  
          
        
          
      
      