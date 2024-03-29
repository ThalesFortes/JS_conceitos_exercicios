/* 
  Solicitar o nome do aluno e as 3 notas do bimestre
  calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passo do bimestre, da os parabéns.

  Se o aluno não passou no bimestre 
  motivar o aluno a dar seu melhor na prova de recuperação.

  Em ambos os casos mostre uma mensagem,
  com o nome do aluno e a sua nota.

*/

let result = (firstBim , secondBim , thirstyBim, nam) => {
   let average = (Number(firstBim) + Number(secondBim) + Number(thirstyBim)) / 3;
   average = average.toFixed(2);
    if (average >= 6) {
       alert(`Meus parabéns ${nam} você foi aprovado com sucesso! Sua média foi: ${average}`);
   } else if (average < 3){
      alert(nam + " você foi reprovado!! Sua média foi: " + average)
    }  else {
       alert(`${nam} você ficou de recuperação! Sua média foi de: ${average} mas não desista, você pode passar e ainda ser a maior nota da sala !!`);
    }
};


alert("Esse programa verificara se você foi aprovado, reprovado ou se esta de recuperação insira os dados solicitados a seguir!!");

let nam = prompt("Qual o nome do(a) aluno(a)?");
let firstBim = prompt("Insira a nota do primeiro bimestre:");
let secondBim = prompt("Insira a nota do segundo bimestre:");
let thirstyBim = prompt("Insira a nota do terceiro bimestre:");

result(firstBim , secondBim , thirstyBim, nam);
