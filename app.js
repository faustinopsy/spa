const routes = {
    '#home': 
        `
        <h1>Home Page</h1><p>Bem-vindo à Home Page.</p>
        `,
    '#sobre': `
        <h1>Sobre</h1><p>Esta é a página Sobre.</p>
        `,
    '#contato': `
        <h1>Contato</h1><p>Entre em contato conosco.</p>
        `
};
const links = 
    `<a href="#home" class="nav-link">Home</a>
     <a href="#sobre" class="nav-link">Sobre</a>
     <a href="#contato" class="nav-link">Contato</a>`;

function inicio() {
    const conteudo = routes[window.location.hash] || routes['#home'];
    document.getElementById('app').innerHTML = conteudo;
}

window.addEventListener('hashchange', inicio);

const navbar = document.querySelector('nav');
navbar.innerHTML = links;
inicio();


