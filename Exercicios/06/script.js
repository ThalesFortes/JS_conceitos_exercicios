/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Cria uma lógica para gerar um número aleatorio
  e verificar se o número digitado é o mesmo que o aleatório gerado 
  pelo sistema.

  Enquanto o usuário não advinha o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/


/*
Sem operador ternario
function game(){
  randomNumber = getRandomInt(0,11)
  alert("Advinhe o número que estou pensando? Está entre 0 e 10")
  let number;
  i = 0
  console.log(randomNumber)
  while (Number(number) != randomNumber){
    number = prompt(`Advinhe o numero vamos la, tentativa ${(i + 1)}:` )
    i ++
    if (number != randomNumber){
      alert("Erro, tente novamente:")
      } else{
      alert(`Parabéns! Você advinhou o número em ${i} tentativas`)
      }
  }
}
*/

/*Com operador ternario
function game(){
  const randomNumber = Math.round(Math.random() * 10) // Math random gera numero de 0 a 1 aleatorio, faço * 10 para que se torne de 0 a 10 e uso o round para arredondar para cima ou baixo dependendo do valor
  alert("Advinhe o número que estou pensando? Está entre 0 e 10")
  let number;
  i = 0
  console.log(randomNumber)
  while (Number(number) != randomNumber){
    number = prompt(`Advinhe o numero vamos la, tentativa ${(i + 1)}:` )
    i ++
    number != randomNumber? alert("Erro, tente novamente:") : alert(`Parabéns! Você advinhou o número em ${i} tentativas`)
  }
}
game()*/

//Operador ternario seria o if e else simplificado

// Abaixo sem o if jeito simplicitado e otmizado do Mayk

function game(){
  const randomNumber = Math.round(Math.random() * 10); // Math random gera numero de 0 a 1 aleatorio, faço * 10 para que se torne de 0 a 10 e uso o round para arredondar para cima ou baixo dependendo do valor
  let number =  prompt("Advinhe o número que estou pensando? Está entre 0 e 10");
  let xAttempts = 1;
  while (Number(number) != randomNumber){
    number = prompt("Erro, tente novamente:")
    xAttempts ++
  };
  alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativa(s)`);
};

game()