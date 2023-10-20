document.addEventListener('DOMContentLoaded', function() {
    const numerosDisponiveis = document.getElementById('numeros-disponiveis');
    const comprarRifaForm = document.getElementById('comprar-rifa');
    const numerosEscolhidos = [];

    comprarRifaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const numeroEscolhido = parseInt(document.getElementById('numero').value, 10);

        if (numerosEscolhidos.includes(numeroEscolhido)) {
            alert('Este número já foi escolhido. Por favor, escolha outro número.');
        } else {
            // Atualize os números disponíveis no lado do cliente (simulação)
            numerosDisponiveis.textContent = parseInt(numerosDisponiveis.textContent, 10) - 1;

            // Adicione o número à lista de números escolhidos
            numerosEscolhidos.push(numeroEscolhido);

            // Limpe o formulário
            comprarRifaForm.reset();
        }
    });
});
