//1 -  Declare uma variavel de nome weight
var weight;

//2 - Que tipo de dado é a variavel acima
console.log(typeof weight);

/* 3 - Declare uma variavel e atribua valores para cada um dos dados:
  *name:String
  *age:Number (integer)
  *stars:Number (float)
  *isSubscribed:Boolean

*/
{
  let name = 'Thales';
  let age = 27;
  let stars = 9.8;
  let isSubscribed = true;
}

// 4 - A variavel student abaixo é de que tipo de dado? Resposta = Stundent é um objeto
{
  let student = {};
  console.log(typeof student)
}

/*4.1 - Atribua a variavel objeto student as mesmas propriedades e valores do exericio 3
  4.2 - Mostre no console a seguinte mensagem <name> de idade <age> pesa <weight> kg.
            Atenção substitua pelos valores do objeto
            */
weight = 63.5

  let name = String;
  let age = Number;
  let stars = Number;
  let isSubscribed = Boolean;

  let student = {
     name : 'Thales',
     age : 27,
     stars : 9.8,
     isSubscribed : true,
  };
  console.log(name)
  console.log(isSubscribed)
  console.log(student)
  console.log(`${student.name} tem ${student.age} de idade e pesa ${weight}kg `)


/*5 - Declare uma variavel do tipo Array, de nome students e atribua a ela nenhuma valor
    5.1 - Ratribua valor para o array students colocando o objeto student acima nela*/

  let students = [
        student
  ]
  console.log(students)

//6 - Coloque no console o valor da posição zero do Array acima

console.log(students[0])

//7 - Crie um novo student e coloque na posição 1 do array students
const john = {
  name: "John",
  age: 38,
  weight: 80.8,
  isSubscribed: false
}

students[1] = [john]

console.log(students)

/*8 - Sem rodar o código responda qual é a resposta do código abaixo e por que?
  Após a resposta, rode o código e veja se acertou.
  
  console.log(a)
  var a = 1
  
  Resposta: A resposta sera undefined pois pelo fato da var ser global e 
  o javascript ler de forma vertical ele vai fazer um hoisting
  elevando a var a antes do console e nao passando valor
  assim lendo ela sem valor e depois so que ele rece
  */
  console.log(a)
  var a = 1

/*9 - E no codigo abaixo 
  console.log(a)
  let a = 1
  
  Resposta:Da erro de referencia pois let a nao é global entao ainda nao foi criada e inicializada
  */
 