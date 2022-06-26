//Atividade
//Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o.
//Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16"

let fruits = [3, 4, 10, 1, 12];
let soma =0;
for (index=0; index < fruits.length; index +=1){
    soma += fruits[index];
    }
    console.log(soma);
    if (soma > 15){
        console.log ("Valor maior que 15");
    } else {
        console.log("valor menor que 16");
    }


    //EXERCICIOS//
   // 1)O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo://

   let tabuada = [0,5,10,15,20,25,30,35,40,45,50];
   for (let index=0; index < tabuada.length; index +=1){
    console.log(tabuada[index]);
   }


   //2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.//
   let word = 'tryber';
   
 
 
 
 