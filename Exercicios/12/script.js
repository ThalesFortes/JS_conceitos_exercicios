/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, 
verifique **se** cada aluno obteve sucesso ou não em entrar no concurso 
e mostre uma mensagem na tela.

 */
const alunos = []
let results = [];

class Alunos{
  constructor(name, noteOne, noteTwo){
    this.name = name
    this.noteOne = noteOne
    this.noteTwo = noteTwo
  }
}

function obterNota(nota) {
  let input = prompt("Insira a nota " + nota + " do aluno:");
  let notaNumerica = Number(input);

  // Verifica se a entrada é um número válido
  if (isNaN(notaNumerica)) {
    alert("Por favor, insira um número válido para a nota " + nota + " do aluno.");
    return obterNota(nota); // Chama a função novamente para solicitar uma nova entrada
  } else {
    return notaNumerica; // Retorna a nota numérica se for válida
  }
}

function message(){
  for (resul of results){
    respons = resul.result >= 7 ?  alert(`O aluno(a) ${resul.nam} tem a média de ${resul.result} e foi Aprovado(a) no concurso`): 
    alert(`Não foi dessa vez aluno(a) ${resul.nam} tem a média de ${resul.result} e foi Reprovado(a)
            Tente novamente na próxima`)
  }
}


function insertAlunos(){
      let input = 0
      while (input !== 2){
        input = Number(prompt(`Quer calcular as médias do seu aluno digite 
                                    1 - Para inserir o aluno e a nota
                                    2 - Para sair`))
        switch(input){
          case 1:
            nam = prompt("Insira o nome do aluno:")
            noteOne = obterNota(1)
            noteTwo = obterNota(2)
            let newAluno = new Alunos(nam, noteOne,noteTwo)
            alunos.push(newAluno)
            results.push({nam:newAluno.name,result:((noteOne + noteTwo)/2)})
            break
          case 2:
            alert(`Aplicação encerrada`)
            break
          default:
            alert("Insira uma entrada válida.")
        }
     }
     message()
  }


insertAlunos()