//Declarar variaveis
var name  

//assignment or atribuição de valores
name = "Myke"

//que tipo de dado foi colocado na var
console.log(typeof name)

//agrupamento de declarações

let age, isHuman

age = 18
isHuman = true

//multiplos argumentos na função
console.log(name,age,isHuman)

//escrita de texto + variaveis

//concatenando valores

console.log("O " + name + " tem " + age  + " anos")

//Interpolanteo valores com template literals
console.log(`O ${name} tem ${age} anos `)

//Objetos

const person = {
  name:'Thales',
  age:27,
  wheigth:63.2,
  isAdmin:true
}
console.log(person)
console.log(`O ${person.name} tem ${person.age} anos`)

//Arrays

const animals = [
  'Lion',
  'Monkey',
  'Cat'
]

console.log(animals[0]) // puxando lion
console.log(animals[2])//puxando cat

console.log(animals)//puxando todos

const animal = [
  'Lion',
  'Monkey',
  {
    name:'cat',
    age:2
  }
] //criando escopo dentro do array e inserindo um objeto no mesmo

console.log(animal[2])

console.log(animal[2].name)