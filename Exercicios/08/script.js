//Exercício da pasta 07 com switch e implementação de remoção
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
  let deleteItem;
  
  while (option != 4) {
  option = Number(prompt(`
    Olá usuário! Digite a opção desejada
  
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Remover um item.
    4. Sair do programa.`));
  
    switch(option){
      case 1:
        menu.push(prompt("Insira um item para ser cadastrado na lista!"))
        break
      case 2:
        ((!menu.length)? alert("Não há itens cadastrados"): alert("Os itens cadastrados são: " + menu))
        break
      case 3: //OBSERVAÇÃO OPERADORES TERNÁRIOS SO ACEITAM EXECUTAR UMA AÇÃO APÓS O "?" e o ":" SE QUISER EXECUTAR MAIS DE UMA MELHOR UTILIZAR IF E ELSE NORMAL
        (menu.length != 0)?  
        ((deleteItem = menu.indexOf(prompt("Insira o nome do item a ser removido"))) != -1) ?
          alert(`O item ${menu.splice(deleteItem, 1)} foi removido com sucesso`)
          :alert("O item inserido não existe") 
        :alert("Não há itens cadastrados");
        break
      case 4:
        alert("Aplicação encerrada")
        break
      default:
        alert("Por favor insira algum dos numeros a seguir como alternativa sendo eles: 1, 2 , 3")
        break
    };
  };