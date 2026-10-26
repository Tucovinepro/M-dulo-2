let nome = "";
let idade = 0;
let etapa = 0;

process.stdin.setEncoding("utf8");

process.stdout.write("Digite seu nome: ");

process.stdin.on("data", (entrada) => {

    if (etapa === 0) {
        nome = entrada.trim();

        if (nome === "") {
            console.error("Erro: o nome não pode estar vazio.");
             process.stdout.write("Digite seu nome: ");
               return;
           }

        etapa = 1;

        process.stdout.write("Digite sua idade: ");
    }

    else if (etapa === 1) {
        idade = Number(entrada.trim());

        if (idade < 18) {
            process.stdout.write(
                `Olá ${nome}! Você tem ${idade} anos e ainda não pode possuir uma CNH.\n`
            );
            process.exit();
        }
        
        else if (isNaN(idade) || idade < 0 || idade > 130) {
             
            console.error("valor fora dos limites, tente novamente.");
            
            process.stdout.write("Digite sua idade: ");

            return; }

        etapa = 2;
        process.stdout.write(`Olá ${nome}! Você possui CNH? (sim/não): `);
    }

    else if (etapa === 2) {
        let cnh = entrada.trim().toLowerCase();

        
    if (cnh !== "sim" && cnh !== "não" && cnh !== "nao") {
        
        console.error("Erro: responda apenas com 'sim' ou 'não'.");

        process.stdout.write("Você possui CNH? (sim/não): ");
        
        return; 
      }

       else if (cnh === "sim") {
            process.stdout.write(
                `Parabéns, ${nome}! Você já pode dirigir, que legal.\n`
            );
        } else {
            process.stdout.write(
                `Tudo bem, ${nome}! Você ainda não possui CNH. Quem sabe em breve você tire sua habilitação!\n`
            );
        }

        process.exit();
    }
});