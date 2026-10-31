const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const perguntas = [
    "Você gosta de café?",
    "Você gosta de animes?",
    "Você gosta de Node.js?",
    "Você gosta de jogos?"
];

const respostas = [];

function respostaValida(resposta) {
    return ["sim", "não", "nao"].includes(resposta);
}

function fazerPergunta(indice) {

    // Caso base: acabou as perguntas
    if (indice >= perguntas.length) {

        console.log("\nSuas respostas foram:");

        for (let gg = 0; gg < respostas.length; gg++) {
            console.log(
                `Pergunta ${gg + 1}: ${respostas[gg]}`
            );
        }

        console.log("\nObrigado pela participação!");
        rl.close();
        return;
    }

    rl.question(`${perguntas[indice]} (sim/não): `, (entrada) => {

        const resposta = entrada.trim().toLowerCase();

        if (!respostaValida(resposta)) {
            console.log("Erro: responda apenas com 'sim' ou 'não'.\n");

            // Repete a mesma pergunta
            fazerPergunta(indice);
            return;
        }

        respostas.push(resposta);

        console.log("Resposta registrada!\n");

        // Próxima pergunta
        fazerPergunta(indice + 1);
    });
}

fazerPergunta(0);