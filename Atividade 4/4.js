process.stdin.setEncoding("utf8");

process.stdout.write("Digite seu ano de nascimento: ");

process.stdin.on("data", (entrada) => {

    let ano_de_nascimento = Number(entrada.trim());

    if (isNaN(ano_de_nascimento)) {
        console.log("Erro: digite um ano válido.");
        process.exit();
    }

    function def_da_idade(ano_de_nascimento) {
        return new Date().getFullYear() - ano_de_nascimento;
    }

    let resultado = def_da_idade(ano_de_nascimento);

    console.log(`Sua idade é aproximadamente ${resultado} anos.`);

    process.exit();
});




