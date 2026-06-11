// Seleciona os elementos da página
const botaoAcao = document.getElementById('btn-acao');
const displayContador = document.getElementById('contador');

// Inicializa o contador (pode começar com um número para parecer que mais pessoas já usaram)
let quantidadeAcoes = 42;
displayContador.textContent = quantidadeAcoes;

// Adiciona o evento de clique ao botão
botaoAcao.addEventListener('click', () => {
    quantidadeAcoes++;
    displayContador.textContent = quantidadeAcoes;
    
    // Pequena animação de feedback
    botaoAcao.style.backgroundColor = '#43a047';
    setTimeout(() => {
        botaoAcao.style.backgroundColor = '#2e7d32';
    }, 200);
    
    alert('Obrigado por ajudar o planeta! 🌱');
});