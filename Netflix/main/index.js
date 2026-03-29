// Função para alternar entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('light-mode');
    // Salva preferência no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '🌙'; // Lua para modo claro
    } else {
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '☀️'; // Sol para modo escuro
    }
}

// Aplica o tema salvo ao carregar a página
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('theme-toggle');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        btn.innerHTML = '🌙';
    } else {
        btn.innerHTML = '☀️';
    }
    // Anexa listeners para gravar o perfil selecionado no localStorage
    const profileLinks = document.querySelectorAll('.profile');
    profileLinks.forEach(link => {
        link.addEventListener('click', function () {
            const img = this.querySelector('img');
            const caption = this.querySelector('figcaption');
            const name = (caption && caption.textContent) ? caption.textContent.trim() : this.dataset.name;
            const imgSrc = (img && img.src) ? img.src : this.dataset.img;
            if (name) localStorage.setItem('perfilAtivoNome', name);
            if (imgSrc) localStorage.setItem('perfilAtivoImagem', imgSrc);
        });
    });
};