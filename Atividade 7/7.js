const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


function checker(user){

    if (user % 2 === 0 )

        console.log("Seu número foi indentificado como Par")

    else if (user % 2 !== 0)

         console.log("Seu número foi indentificado como Ímpar")


};

 function validator(user){
       
    if(isNaN(user) || user < 0){
        console.log("Erro: Escolha um número natural\n")

        console.log("Digite um número natural aleatório: ")

        return false;
          }

    return true;
 }

 rl.question("Digite um número natural aleatório: ", (entrada) => {
    
    const user = Number(entrada.trim());

    if(!validator(user)){
        rl.close();
        return;
    };

    checker(user);  

    rl.close();

 })

