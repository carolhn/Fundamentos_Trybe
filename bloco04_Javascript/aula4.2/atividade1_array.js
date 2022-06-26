let pizza1= "4 quejos";
let pizza2 ="frango";
let pizza3 ="Margerita";
let pizza4 ="Palmiro";
let pizza5 ="chocolate";
console.log (pizza1, pizza2,pizza3,pizza4,pizza5);

//array//
//como criar um arrey? colocar um valor dentro do []//
let pizzas = ["frango", "palmito", "calabresa ", "margerita", "chocolate preto"];
pizzas [5] ="confete";      //adicionar mais uma pizza no indice 5, se eu colocar o indice 4 ele vai substituir o indice(chocolate preto)
pizzas.push('peito de peru');   //estou colocando esse valor na ultima posição do meu array

console.log("Menu de sabores:" + pizzas);
console.log(pizzas.length);     //comando lenght conta as quantidades de item na array
console.log(pizzas.sort());     //comando sort() coloca em ordem alfabetica
console.log(pizzas[2]);         //mostra o item no numero da array//

for (let index= 0; index < pizzas.length;index +=1) {   //forma de eu iniciar meu array no indice 0 e (lenght) percorrendo ela inteira somando +1//
    console.log(pizzas[index]);                         // vai mostrar a array pizza os indix//
}
