/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite a opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados 
    3. Sair do programa.

  ---
  O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
  Se não houver nenhum item cadastrado, mostrar a mensage:
    "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.
 */

const menu = new Array();

let option;

while (option != 3) {
option = Number(prompt(`
  Olá usuário! Digite a opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa.`));

  if (option == 1){
    menu.push(prompt("Insira um item para ser cadastrado na lista!"))
  } else if (option == 2){
    ((!menu.length)? alert("Não há itens cadastrados"): alert("Os itens cadastrados são: " + menu))
  } else if (option == 3){
    alert("Aplicação encerrada")
    break
  } else {
    alert("Por favor insira algum dos numeros a seguir como alternativa sendo eles: 1, 2 , 3")
  };
};