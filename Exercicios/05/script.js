/*
  Capture 10 items para compor a lista de um supermercado.

  Após capturar os 10 items, imprima-os, separando por vírgular.
*/

// Forma que eu fiz sozinho abaixo
/*
const myArray = new Array()

for (let item = 0; item < 10; item++){
  itemName = prompt("Digite o item: " + (item + 1 ))
  if ( itemName != ''){
    myArray.push(itemName)
  } else {
    alert("Insira algo por favor")
    item --
  }
  alert(`Sua lista atual é ${myArray}`)
}

alert(myArray)
*/

// Forma que o Mayk fez abaixo 

let items = []

let itemName; // Se eu tivesse criado dentro do escorpo do for so seria enchergada la
                  //como foi fora eu enchergo em ambos lugares
                    //ou seja fora do escopo é visto no escopo, dentro é so dentro 

for (let item = 0; item < 10; item++){
  itemName = prompt("Digite o item: " + (item + 1 ))
  if ( itemName != ' '){
    items[item] = itemName
  } else {
    alert("Insira algo por favor")
    item = item - 1
  }
  alert(`Sua lista atual é ${items}`)
}

alert("Sua lista final de coompras é:" + items)
