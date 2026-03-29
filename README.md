# Projeto Netflix (simples) — Explicação:

- Raiz do projeto:
  - `README.md` — este arquivo (o que você está lendo).
  - `main/` — aqui fica a tela inicial onde você escolhe quem vai assistir.
  - `catalogo/` — aqui fica a página com filmes/filas/carrosséis.
  - `assets/` — imagens e recursos (fotos dos perfis, ícones, etc.).

Pasta `main` (o começo, a tela "Quem está assistindo?")
- Arquivos principais:
  - `index.html` — a página que mostra os perfis (Jean, Maria, etc.).
  - `style.css` — o visual (cores, tamanhos, responsividade) dessa página.
  - `index.js` — o código que liga os botões: alterna tema (claro/escuro) e guarda no `localStorage` qual perfil foi escolhido.
- O que acontece quando você clica num perfil:
  - Antes de mudar para o catálogo, o navegador grava duas coisas no `localStorage`: o `perfilAtivoNome` (nome) e `perfilAtivoImagem` (caminho da imagem).
  - Depois ele abre a página do catálogo para mostrar os filmes enquanto lembra quem está assistindo.
- Observações simples:
  - Se você mover `index.html` para outra pasta, os caminhos das imagens e dos links podem quebrar; por isso usamos caminhos relativos com `../` quando necessário.

Pasta `catalogo` (onde os filmes aparecem)
- Arquivos principais:
  - `catalogo.html` — a página do catálogo com a barra de navegação e o espaço onde os carrosséis aparecem.
  - `catalogo.css` — (se existir) estilos específicos do catálogo.
  - `js/` — código JavaScript que monta os carrosséis e lê o perfil salvo.
    - `main.js` — ao carregar, ele lê `perfilAtivoNome` e `perfilAtivoImagem` do `localStorage` e coloca o nome e a foto na barra superior.
    - `data.js`, `utils.js`, `components/` — ajudam a criar os carrosséis e os cartões dos filmes.
- O que você vê:
  - A navbar com o logo, o nome do perfil (ou “Seu nome” se não houver nada salvo) e o avatar.
  - Vários carrosséis de filmes criados dinamicamente pelo JavaScript.

Pasta `assets` (imagens e figuras)
- Guarda as imagens usadas pelo site, por exemplo:
  - fotos dos perfis (`perfil_1.jpg`, `perfil_2.jpg`, ...)
  - imagens de fundo, ícones e outras figuras usadas nas páginas.
- Como usar corretamente:
  - Os arquivos HTML usam caminhos relativos para encontrar essas imagens. Se a página estiver na raiz, o caminho é `assets/arquivo.jpg`. Se a página estiver dentro de `main/`, o caminho deve ser `../assets/arquivo.jpg`.

Como abrir o projeto (passo a passo simples):
1. Abra o arquivo `main/index.html` no navegador (clicando duas vezes ou usando "Abrir com" → navegador).
2. Clique em um perfil — isso salva o nome e imagem no `localStorage` e abre `catalogo/catalogo.html`.
3. Na página do catálogo, verifique se o nome e a foto aparecem na barra superior.

Dica para desenvolvedores:
- Se alguma imagem ou link estiver quebrado, abra o DevTools (F12) → aba Network/Console e veja qual caminho deu erro (404). Normalmente é só ajustar o caminho relativo (`../assets/...` ou `assets/...`) conforme a localização do arquivo HTML.

Divirta-se testando! 😊
