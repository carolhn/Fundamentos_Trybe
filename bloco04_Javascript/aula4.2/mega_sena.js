
//multiplo de 3 entre 9 e 27.
for (let multiple=9; multiple<= 27; multiple +=3) {
    console.log(multiple);
}

//Acessar todos os indices da array
let array= [10,30,20,55];
for (let index= 0; index < array.length; index += 1){
    console.log(array[index]);
}

//Desconto de 10% no valor da array
let array= [10,30,20,55];
for (let index= 0; index < array.length; index += 1){
    let desconto = array[index] / 10;
    console.log("Desconto R$", desconto);
}

//Aumentar 50% no valor da array
let array= [10,30,20,55];
for (let index= 0; index < array.length; index += 1){
    let aumento = array[index] * 1.5;
    console.log("Aumento R$", aumento);
}

//Mega sena - teste 1
let num1= Math.floor(Math.random() *60) +1;
let num2= Math.floor(Math.random() *60) +1;
let num3= Math.floor(Math.random() *60) +1;
let num4= Math.floor(Math.random() *60) +1;
let num5= Math.floor(Math.random() *60) +1;
let num6= Math.floor(Math.random() *60) +1;

console.log(num1,num2,num3,num4,num5,num6);

//Mega sena - FOR

let megasena= [];

for (let index=0; index < 6; index += 1){
    megasena.push (Math.floor(Math.random()* 60) +1);
}  
 console.log(megasena);

 // Mega sena - opção 2
    let game = [10,20,30,40,50,60];
    let megasena= [];

     for (let index= 0; index < megasena.length; index += 1) {        //para cada valor da lista megaasena
     for (let gameIndex = 0; gameIndex < game.length; gameIndex +=1){
          if (megasena[index] === game[gameIndex]) {
        console.log ("acertou");
      }
     }
  }

