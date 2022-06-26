
// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

//resultado:
//Bom dia, João
//Bom dia, João
//Bom dia, Julia
//Bom dia, Marcelo

//________________________________________________________________________________________
function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!

  //mesmo exemplo do bom dia com funcao

//____________________________________________________________________________________

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado


//_______________________________________________________________________________________
//exemplo de funcao usando parametros

// Com função
function soma(a, b) {
    return a + b;
  }
  
  console.log(soma(5, 2)); // 7

  //_____________________________________________________________________________________
  //exemplo de funcao usando parametro

  function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais

  //___________________________________________________________________________________
  function greetingsMessage(name) {
    console.log("Boas vindas, " + name);
  }
  

  