/*
  Capturar 2 números e fazer as operações matemáticas de
  soma, subtração , multiplicação, divisão e resto da divisão.

  E para cada operação , mostrar um alerta com o resultado.

*/

alert("Temos uma calculadora abaixo insira dois numeros os quais vão ser realizadas todas operações matemáticas")

let firstNumber = prompt ("Insira o primeiro numero:")
let secondNumber = prompt ("Insira o segundo numero:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber


alert(`A soma entre os numeros é: ${sum}`)
alert(`A subtração entre os numeros é: ${sub}`)
alert(`A multiplicação entre os numeros é: ${mult}`)
alert(`A divisão entre os numeros é: ${div}`)
alert(`O resto da divisão entre os numeros é: ${rest}`)