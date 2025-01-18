// Este script renderiza o estado do ecossistema salvo em arquivos JSON.

window.onload = function() {
    const canvas = document.getElementById('ecosystemCanvas');
    const ctx = canvas.getContext('2d');
    const tileSize = 20; // Tamanho maior para os tiles, melhorando a pixel art

    let currentRound = 1;
    const maxRounds = 10;

    function carregarEstado(round) {
        fetch(`estado_rodada_${round}.json`)
            .then(response => response.json())
            .then(data => {
                renderizarEcossistema(data);
            })
            .catch(err => console.error('Erro ao carregar o estado do ecossistema:', err));
    }

    function renderizarEcossistema(data) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        data.criaturas.forEach(criatura => {
            const { posicao, energia } = criatura;
            const [x, y] = posicao;

            // Desenha uma criatura com pixel art 
            desenharCriatura(x, y, energia);
        });
    }

    function desenharCriatura(x, y, energia) {
        // Define cores baseadas na energia da criatura
        const corBase = energia > 15 ? '#FF0000' : energia > 10 ? '#FFA500' : '#FFFF00';
        const detalhes = energia > 15 ? '#800000' : energia > 10 ? '#804000' : '#808000';

        // Corpo principal
        ctx.fillStyle = corBase;
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);

        // Detalhes extras
        ctx.fillStyle = detalhes;
        ctx.fillRect(x * tileSize + tileSize / 4, y * tileSize + tileSize / 4, tileSize / 2, tileSize / 2);

        // Olhos (adicionando um toque de estilo)
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(x * tileSize + tileSize / 4, y * tileSize + tileSize / 8, tileSize / 8, tileSize / 8);
        ctx.fillRect(x * tileSize + 3 * tileSize / 4 - tileSize / 8, y * tileSize + tileSize / 8, tileSize / 8, tileSize / 8);
    }

    // Adiciona controles para navegar entre as rodadas
    document.getElementById('prevRound').addEventListener('click', () => {
        if (currentRound > 1) {
            currentRound--;
            carregarEstado(currentRound);
        }
    });

    document.getElementById('nextRound').addEventListener('click', () => {
        if (currentRound < maxRounds) {
            currentRound++;
            carregarEstado(currentRound);
        }
    });

    // Configura o Canvas
    canvas.width = 1000;
    canvas.height = 1000;

    // Carrega a primeira rodada
    carregarEstado(currentRound);
};
