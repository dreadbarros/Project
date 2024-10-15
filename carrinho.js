let total = 0; // Variável global para o valor total
const valorTotalElement = document.getElementById('valorTotal');

function atualizarValorTotal() {
  valorTotalElement.textContent = `€${total.toFixed(2)}`;
}

document.querySelectorAll('.u-btn').forEach(botao => {
  botao.addEventListener('click', () => {
    const precoElement = botao.parentElement.querySelector('.u-text-palette-2-light-3');
    if (precoElement && precoElement.textContent) {
      const valorTexto = precoElement.textContent.replace('€', '').trim();
      const valorNumerico = parseFloat(valorTexto);
      
      if (!isNaN(valorNumerico)) {
        total += valorNumerico;
        if (total >= 1000) {
          valorTotalElement.style.width = '90px';
        } else if (total >= 100) {
          valorTotalElement.style.width = '80px';
        } else {
          valorTotalElement.style.width = '70px';
        }
        atualizarValorTotal();
      } else {
        console.error("Valor numérico inválido!");
      }
    } else {
      console.error("Elemento de preço não encontrado ou vazio!");
    }
  });
});

