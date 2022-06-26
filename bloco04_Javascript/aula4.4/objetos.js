//objeto: um tipo de variavel que contem entradas.
//uma entrada é constituida por uma chave que guarda um valor
// uma propriedade é uma associação entre um nome (ou chave) e um valor.
// declaracao de objetos

let pessoa ={                       //-> variavel recebendo um valor
    nome: "Carol",
    idade: 24,
    endereço:{                      //->propriedade recebendo um valor
        cidade: "Armazem",          //chaves (nome, idade, endereço)
        estado: "SC",
    }
};


//acessar propriedades do objeto com .(dot)

let campo = "idade";
console.log(pessoa.endereço);
console.log(pessoa.endereço.estado);
// acessar propriedades com colchetes []
console.log(pessoa[campo]);



//percorrer as chaves das prorpeidades usando for in

pessoa.nome= "Caroline Nunes";
console.log(pessoa);

pessoa.turmaAtual= "T24B";
console.log(pessoa);

//resultado:
//  nome: 'Caroline Nunes',
//idade: 24,
//'endereço': { cidade: 'Armazem', estado: 'SC' },
//turmaAtual: 'T24B'
//}