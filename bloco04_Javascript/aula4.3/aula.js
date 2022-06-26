let login = "usuarioTrybe";
let senha= "trybe2022";
let temAcesso= false;
let novosUsuarios= [ "Ana", "Camila", "Carol", "Jose", "Lucas"];

//se a pessoa tiver acesso o sistema
if (login ==="usuarioTrybe" && senha ==="trybe2022"){
    console.log("Acesso permitido!");
} else {
    console.log("Acesso recusado!");
}
 //o sistema deve criar senhas iniciais aleatorias para os novos usuarios no padrao "nome" + "_" + numero aleatorio.

if (temAcesso === true){            // 1° como verificar se tenho acesso?
    for(let index=0; index < novosUsuarios.length; index +=1){   //2° como percorrer cada pessoa para gerar uma senha
                    
        console.log("Pessoa usuaria:", novosUsuarios[index] + "Senha:", Math.random ()); //3° como gerar numero aleatorio
          }   
   }



   