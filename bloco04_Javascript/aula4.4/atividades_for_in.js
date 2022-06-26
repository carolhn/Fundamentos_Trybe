let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCaturiry: true,
};


//1 vai mostrar cada valor da lista pizza.
for (let key in pizzas){
console.log(pizzas[key]);
}

//resultado 
//Palmito
//39.9
//true

//2 vai mostrar a posição do meu array;
let pizzasDoces = ["chocolate", "banana", "morango"];
for (let key in pizzasDoces) {
   console.log(key);
}

//resultado
//0
//1
//2

//3 vai exibir no console 3x os sabores da lista
let pizzasDoces = ["chocolate", "banana", "morango"];
for (let key in pizzasDoces) {
    console.log(pizzasDoces);
}

//resultado
//[ 'chocolate', 'banana', 'morango' ]
//[ 'chocolate', 'banana', 'morango' ]
//[ 'chocolate', 'banana', 'morango' ]


//4 dessa forma vai mostrar na tela cada linha um valro do array;
let pizzasDoces = ["chocolate", "banana", "morango"];
for (let key in pizzasDoces) {
   console.log(pizzasDoces[key]);
}
//resultado
//chocolate
//banana
//morango

//5 mostra o indice mais o valor relacionado em sequencia
let pizzasDoces = ["chocolate", "banana", "morango"];
for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}

//resultado:
//0 chocolate
//1 banana
//2 morango


//_____________________EXERCICIO_________________________________________

//mostra o indice e o valor em sequencia. (igual exercicio 5)
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  //resultado:
  //type Fiat
  //model 500
  //color white

  //___________________________ FOR OF ________________________________________________
  //Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores,
  // e não dos índices como o for/in. Vejamos o exemplo:

  let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

//___________________________________EXERCICIO 1- PARA FIXAR_____________________________
//1 Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome,
// substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names){
    console.log("Olá", names [key]);
  }

//_______________________________________________________________________________-
//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car){
    console.log(key, car[key]);
  }
  //resultado:
  //model A3 Sedan
  //manufacturer Audi
  //year 2020

  