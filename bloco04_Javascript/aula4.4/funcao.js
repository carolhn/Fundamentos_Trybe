//função: uma funcao é um pedaço de codigo que faz alguma tarefa especififca e pode ser 
//chamada qantas vezes desejarmos.
//responsabilidade bem definida
//reutilização

function exemplo (){
    console.log("olá mundo das funcões");
}

exemplo();

//_________________________________________________________________________________________

//parametro: uma lista e uma ou mais variaveis da função
function exemplo (){
    let conteudo ="funcões"
    console.log("olá mundo de", conteudo);
}
exemplo();

//resultado:
//olá mundo de funcões


// incicialização com valores de fora da função

function exemplo (conteudo, data){
    console.log("olá mundo de", conteudo, "em", data);
}
exemplo("funções");
exemplo("ola mundo de javascript", "bloco4");

//resultado:
//olá mundo de funções em undefined
//olá mundo de ola mundo de javascript em bloco4


//__________________________________________________________________________
let resultado = soma(2,2);

function soma(num1,num2){
let resultado = num1 + num2;
return resultado;
}
console.log(resultado);

//resultado: 4