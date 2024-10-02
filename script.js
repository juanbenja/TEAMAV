// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os links de botões
    const buttonLinks = document.querySelectorAll('.buttons');

    // Adiciona um evento de clique para cada botão
    buttonLinks.forEach(button => {
        button.addEventListener('click', (event) => {
            const url = button.getAttribute('href'); // Obtém a URL do link clicado
            window.location.href = url; // Redireciona para o link na mesma aba
        });
    });

    // Exemplo adicional: mudança de estilo ao clicar no botão de agendar aula
    const agendarAulaButton = document.querySelector('.buttons[href*="wa.link"]');
    
    if (agendarAulaButton) {
        agendarAulaButton.addEventListener('click', () => {
            alert('Vamos agendar sua aula experimental grátis! Aguarde o redirecionamento para o WhatsApp.');
        });
    }
});
