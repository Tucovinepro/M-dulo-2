process.stdin.setEncoding("utf8");

process.stdout.write("Digite sua idade: ");

process.stdin.on("data", (entrada) => {

    idade = Number(entrada.trim());

    if(isNaN(idade) || idade < 0 || idade > 130) {
             
            console.error("valor fora dos limites, tente novamente.");
            
            process.stdout.write("Digite sua idade: ");

            return;
        
        } 
    
    else if(idade < 18){

        process.stdout.write(`Vc é menor de idade, acesso negado`);

        process.exit();

    }

    else{

        process.stdout.write(`Vc é maior de idade, acesso liberado!`);

        process.exit();
    }

})