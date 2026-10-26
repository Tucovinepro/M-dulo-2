let nome = ""

process.stdin.setEncoding("utf8");

process.stdout.write("Digite seu nome: ");

process.stdin.on("data", (entrada) => {

    if(!nome){

        nome = String(entrada.trim());

        if (nome === "") {
            console.error("Erro: o nome não pode estar vazio.");
             process.stdout.write("Digite seu nome: ");
               return;
           }

        process.stdout.write("Digite sua idade: ");

    } else {

        idade = Number(entrada.trim());

        if (isNaN(idade) || idade < 0 || idade > 130) {
             
            console.error("valor fora dos limites, tente novamente.");
            
            process.stdout.write("Digite sua idade: ");

            return; }

        process.stdout.write(`Olá ${nome}! Vc tem ${idade} anos`);

        process.exit()
    }

    
})