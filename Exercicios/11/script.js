/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/ 

function calculadora(a,b,op){
  let result;
  switch(op){
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
        break
    case '/':
      result = a / b
      break
    case '**':
      result = a ** b
      break
    case '%':
      result = a % b
      break
    default:
      result = alert("Operador invaldio não foi possivel realizar o calculo")
  }
  return result
};

function verifica(a, b) {
  ((a + b) % 2 == 0) ? alert("A soma dos números inseridos é par") : alert("A soma dos números inseridos é ímpar");
  (a == b) ? alert("Os números inseridos são iguais") : alert("Os números inseridos são diferentes");
};


alert("Você esta usando uma calculadora")
let numberOne = Number(prompt("Insira o primeiro numero:"));
let operation = prompt(`Insira a operação desejada:`)
let numberTwo = Number(prompt(`Insira o segundo numero que vai ser ${op} ao primeiro:`));

alert(calculadora(numberOne,numberTwo,operation));
verifica(numberOne,numberTwo );