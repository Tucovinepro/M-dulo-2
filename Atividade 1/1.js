let nome = ""

process.stdin.setEncoding("utf8");

process.stdout.write("Digite seu nome: ");

process.stdin.on("data", (entrada) => {

    if(!nome){

        nome = String(entrada.trim());

        process.stdout.write("Digite sua idade: ");

    } else {

        idade = Number(entrada.trim());

        process.stdout.write(`Olá ${nome}! Vc tem ${idade} anos`);

        process.exit()
    }

    
})