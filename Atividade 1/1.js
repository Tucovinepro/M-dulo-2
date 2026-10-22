process.stdout.write("Digite seu nome e idade separados por vírgula:\n");

process.stdin.setEncoding("utf8");

process.stdin.on("data", (entrada) => {
    const [nome, idadeTexto] = entrada.trim().split(",");

    const idade = Number(idadeTexto);

    if (idade < 18) {
        process.stdout.write(
            `Olá, ${nome}! Seu voto é facultativo a partir dos 16 anos.\n`
        );
    } else {
        process.stdout.write(
            `Olá, ${nome}! Seu voto é obrigatório, não se esqueça.\n`
        );
    }

    process.exit();
});