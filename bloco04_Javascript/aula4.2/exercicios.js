
//1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index +=1){
    console.log(numbers[index]);
}



//2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
for (let index=0; index < numbers.length; index +=1){
    soma += numbers [index];
}
console.log(soma);



//3 -Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
for (let index=0; index < numbers.length; index +=1){
    soma += numbers [index];
    }
    let media = soma/numbers.length;
    console.log(media);



//4 -Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media= 0;

for (let index= 0; index < numbers.length; index +=1){
    media += numbers[index];
}
 resultado = media/numbers.length;

if (media > 20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20")
}




//5- Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index +=1){
    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

****

//6 -Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result=0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index]%2 !==0){
        result += 1;
    }
}
if (result === 0){
    console.log("nenhum numero impar encontrado");
    } else {
        console.log(result);
    }



 //7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 // o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1
 
 let smallestNumber = numbers[0];
 
 for (let index = 1; index < numbers.length; index += 1) {
   if (numbers[index] < smallestNumber) {
     smallestNumber = numbers[index];
   }
 }
 
 console.log(smallestNumber);




//8 -Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);




//9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };

  //BONUS//

  //10- Ordene o array numbers em ordem crescente e imprima seus valores;
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//11- Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//12- Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. 
//Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo.
// Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor).
// Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);


https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_loop_for.asp
https://www.w3schools.com/js/