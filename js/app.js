let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
  console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`)
  let imagem = gameClicado.querySelector('.dashboard__item__img');
  let botao = gameClicado.querySelector('.dashboard__item__button');
  let nomeDoJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

  if (imagem.classList.contains('dashboard__item__img--rented')) {
    if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo}?`)) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
    alert(`${nomeDoJogo} devolvido. Esperamos que tenha se divertido!`);
    jogosAlugados--;
    }
  } else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
    jogosAlugados++;
  }

  contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
  jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
  contarEExibirJogosAlugados();
});