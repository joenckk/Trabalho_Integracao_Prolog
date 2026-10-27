const { spawnSync } = require("child_process");
const path = require("path");
const readline = require("readline");

// Caminho do SWI-Prolog instalado
const swipl = "C:\\Program Files\\swipl\\bin\\swipl.exe";

// Caminho do arquivo com as regras
const regras = path.join(__dirname, "regras.pl");

// Interface para receber o numero
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== VERIFICADOR DE PAR OU IMPAR ===");

rl.question("Digite um numero inteiro: ", (entrada) => {
    const numero = Number(entrada.trim());

    if (entrada.trim() === "" || !Number.isSafeInteger(numero)) {
        console.log("Erro: digite um numero inteiro valido!");
        rl.close();
        return;
    }

    // Consulta o Prolog
    const consulta = `par(${numero})`;

    const resultado = spawnSync(
        swipl,
        ["-q", "-s", regras, "-g", consulta, "-t", "halt"],
        { encoding: "utf8" }
    );

    if (resultado.error) {
        console.log("Erro ao iniciar o Prolog:");
        console.log(resultado.error.message);
    } else if (resultado.status === 0) {
        console.log(`O numero ${numero} e PAR!`);
    } else if (resultado.status === 1 && !resultado.stderr) {
        console.log(`O numero ${numero} e IMPAR!`);
    } else {
        console.log("Erro ao consultar o Prolog:");
        console.log(resultado.stderr || `Codigo: ${resultado.status}`);
    }

    rl.close();
});
