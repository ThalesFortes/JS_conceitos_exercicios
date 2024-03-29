/* 
  Solicite 2 números, faça a soma deles  
  e apresente o resultado final ao usuário
*/

alert('Insira dois números para que seja realizado sua soma!');

{
  let numberOne = parseFloat(prompt('Digite o primeiro número:'));
  let numberTwo = parseFloat(prompt('Digite o segundo número:'));

  let result = numberOne + numberTwo;
  
  alert(`Resultado final é: ${result}`);
}


alert('Insira dois números para que seja realizado sua soma!');
{
  let numberOne = Number(prompt('Digite o primeiro número:'));
  let numberTwo = Number(prompt('Digite o segundo número:'));
  
  let result = numberOne + numberTwo;
  
  alert("Resultado final é:" + result);
}


/*Em JavaScript, Number() e parseInt() são duas funções diferentes usadas para converter valores em números, mas com algumas diferenças importantes:

Number():
Number() é uma função construtora embutida em JavaScript que é usada para converter o argumento passado para um número.
Se o argumento passado não for um número válido, Number() tentará convertê-lo em um número.
Se o argumento for uma string contendo apenas dígitos (possivelmente com um sinal de menos na frente), ele será convertido em um número inteiro ou em ponto flutuante, dependendo do caso.
Se o argumento for uma string que não começa com um dígito ou contém caracteres não numéricos, o resultado será NaN (Not a Number).
Exemplo:

javascript
Copy code
console.log(Number("123"));   // Saída: 123
console.log(Number("123.45"));   // Saída: 123.45
console.log(Number("ABC"));   // Saída: NaN

parseInt():
parseInt() é uma função que converte a string passada para um inteiro, baseado em um radix (base numérica) opcional.
Ele analisa a string até encontrar um caractere que não pode ser interpretado como parte de um número, então para de analisar.
Se o primeiro caractere não puder ser convertido para um número, parseInt() retornará NaN.
Se nenhum radix for fornecido, parseInt() tentará determinar a base do número na string. 
Se a string começar com "0x", será interpretada como um número hexadecimal. Se começar com "0", será interpretada como octal. Caso contrário, será interpretada como decimal.

Exemplo:

javascript
Copy code
console.log(parseInt("123"));   // Saída: 123
console.log(parseInt("123.45"));   // Saída: 123
console.log(parseInt("ABC"));   // Saída: NaN
console.log(parseInt("10", 2));   // Saída: 2 (interpreta "10" como binário)
console.log(parseInt("10", 8));   // Saída: 8 (interpreta "10" como octal)
console.log(parseInt("10", 10));   // Saída: 10 (interpreta "10" como decimal)
console.log(parseInt("10", 16));   // Saída: 16 (interpreta "10" como hexadecimal)
Em resumo, enquanto Number() converte a string inteira para um número (inteiro ou flutuante), 
parseInt() apenas analisa a string até encontrar um caractere que não seja um dígito, convertendo o que puder para um número inteiro com base em um radix opcional.
*/