function gerarNumero(min, max) {
        // Retorna um número inteiro aleatório entre 'min' e 'max'
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adicao () {
    const n1 = gerarNumero(1,100);
    const n2 = gerarNumero(1,100);
    const resultado = n1 + n2;

    console.log(n1 + " + " + n2 + " =");
    let resposta = Number(prompt(`Qual o resultado de ${n1} + ${n2}?`));
    if (resposta === resultado) {
        alert ('Você acertou!');
    } else {
        alert (`Você errou! O resultado correto é ${resultado}`);
    }
}

function subtracao() {
    const n1 = gerarNumero(1,100);
    const n2 = gerarNumero(1,100);
    const resultado = n1 - n2;

    console.log(`${n1} - ${n2} =`);
    let resposta = Number(prompt(`Qual o resultado de ${n1} - ${n2}?`));
    if (resposta === resultado) {
        alert ('Você acertou!');
    } else {
        alert (`Você errou! O resultado correto é ${resultado}`);
    }
}

function multiplicacao() {
    const n1 = gerarNumero(1, 100);
    const n2 = gerarNumero(1, 20);
    const resultado = n1 * n2;

    console.log(`${n1} x ${n2} =`);
    let resposta = Number(prompt(`Qual o resultado de ${n1} x ${n2}?`));
    if (resposta === resultado) {
        alert ('Você acertou!');
    } else {
        alert (`Você errou! O resultado correto é ${resultado}.`);
    }
}

function divisao() {
    const n1 = gerarNumero(10,100);
    const n2 = gerarNumero(1,20);
    const resultado = Math.trunc(n1 / n2);

    console.log(`${n1} / ${n2} =`);
    let resposta = Number(prompt(`Qual o resultado (inteiro) de ${n1} / ${n2}?`));
    if (resposta === resultado) {
        alert ('Você acertou!');
    } else {
        alert (`Você errou! O resultado correto é ${resultado}. `);
    }
}