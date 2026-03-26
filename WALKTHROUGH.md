# 🚀 Walkthrough: Projeto "O Ritmo da Alma"

O projeto foi transformado em uma aplicação moderna utilizando **Vite**, **React**, **Tailwind CSS** e **Framer Motion**, proporcionando uma experiência visual de alta performance ("Cosmic Symphony").

## 📁 Estrutura do Projeto

- **`src/App.jsx`**: Todo o layout principal, componentes e animações.
- **`src/components/CosmicBackground.jsx`**: Fundo animado de partículas (estrelas e notas) otimizado com Canvas API.
- **`public/cover.png`**: Capa do livro gerada com IA (3D effect).
- **`abrir_projeto.bat`**: Atalho para abrir o navegador e iniciar o servidor de desenvolvimento.

## 🛠️ Como Utilizar

1. **Abrir o Projeto**:
   - Clique duas vezes no arquivo `abrir_projeto.bat` na raiz da pasta.
   - Isso abrirá o navegador em `http://localhost:5173` e iniciará o ambiente de desenvolvimento.

2. **Desenvolvimento Local**:
   - No terminal, você pode usar `npm run dev` se preferir.
   - As alterações no código refletirão instantaneamente no navegador.

3. **Deploy para GitHub Pages**:
   - Execute o comando: `npm run build`
   - O conteúdo da pasta `dist` estará pronto para ser postado no seu repositório do GitHub Pages.

## ✨ Recursos Implementados

- **Animações "Reveal"**: Seções aparecem suavemente conforme o scroll.
- **Capa 3D Interativa**: O livro segue o movimento do mouse para um efeito de profundidade premium.
- **Micro-interações**: Botões com gloss e efeitos de glow dourado.
- **Responsividade Total**: Design otimizado para celulares, tablets e desktops.

> [!TIP]
> **Adicionando Fotos**: Coloque a foto do autor com o nome `author.png` dentro da pasta `public` para que ela apareça automaticamente no layout.
