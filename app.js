function sortear () {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let listaDeNumerosSorteados = [];
    let numero;

    for (let index = 0; index < quantidade; index++) {
        numero = gerarNumeroAleatorio(de, ate);
    
    while (listaDeNumerosSorteados.includes(numero)) {
        numero = gerarNumeroAleatorio(de, ate);
    }

    }

    if (de >= ate) {
        alert('Atenção! O campo "de" apresenta um valor maior que "até". Estabeleça novos parâmetros:');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Atenção! O quantidade de números sorteados desejada é maior que o intervalo. Estabeleça novos parâmetros:');
        return;
    }

    listaDeNumerosSorteados.push(numero);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaDeNumerosSorteados}</label>`
    

    alterarStatusDoBotao();
}



function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}


function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusDoBotao();
}