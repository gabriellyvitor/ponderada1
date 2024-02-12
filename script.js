// Captura os elementos de link pelo ID
const instagramLink = document.getElementById('instagram');
const linkedinLink = document.getElementById('linkedin');

// Adiciona event listeners para cada link
instagramLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = 'https://www.instagram.com/gabriellyvitor_/'; // Redireciona para o perfil do Instagram
});

linkedinLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = 'https://www.linkedin.com/in/gabriellysilvavitor/'; // Redireciona para o perfil do LinkedIn
});
