//O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

//Por fim, com o for/of, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

//É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma.
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
console.log(arrOfNumbers);
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
console.log(names);
