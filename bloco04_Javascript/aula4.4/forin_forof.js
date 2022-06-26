// calcular o quadrado dos valores de uma array

let valores =[2,3,5,7];
let quadrado= [];

//percorrer uma array com for
for(let index=0; index <valores.length;index +=1) {
    console.log(valores[index], "ao quadrado", valores[index]**2)
    quadrado.push("resultado");
}

//resultado:
//2 ao quadrado 4
//3 ao quadrado 9
//5 ao quadrado 25
//7 ao quadrado 49


// percorrer os indices do array com for in (indices)
let valores =[2,3,5,7];
let quadrado= [];
for (let index in valores){      //   -> igual for(let index=0; index <valores.length;index +=1) {
   let resultado = valores[index]**2;
   quadrado.push(resultado);
}
console.log(quadrado);

//resultado:
//[ 4, 9, 25, 49 ]


//percorrer todos os valores dop array com for of (valores)
let valores =[2,3,5,7];
let quadrado= [];
for (let valor of valores){
    let resultado=valor **2;
    quadrado.push(resultado);
}
console.log(quadrado);

//resultado:
//[ 4, 9, 25, 49 ]


//OBS: quando eu quero eprcorrer uma array do incio ao fim precisando so dos valores//


