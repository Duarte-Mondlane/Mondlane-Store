# Mondlane Store

**Site de venda de roupas e acessórios**

Breve descrição: Mondlane Store é um site estático para apresentação e venda de roupas e acessórios. A interface usa HTML, CSS e JavaScript para fornecer páginas de catálogo, detalhes de produto e um carrinho de compras (front-end).

---

## 1. Descrição mais detalhada

**Objetivo do site**

- Fornecer uma vitrine online para roupas e acessórios, permitindo que visitantes naveguem por produtos, visualizem detalhes e simulem um fluxo de compra (carrinho).

**Público-alvo**

- Consumidores interessados em moda e acessórios, principalmente usuários de dispositivos móveis e desktop que procuram uma experiência visual rápida e responsiva.

**Funcionalidades oferecidas**

- Catálogo de produtos (páginas de listagem).
- Página de detalhe do produto com imagens e descrição.
- Carrinho de compras (página `shoping-cart.html`) com interface para revisão de itens.
- Páginas auxiliares: login (`login.html`), contato (`contact.html`), sobre (`about.html`).
- Layout responsivo e uso de componentes de terceiros (ex.: sliders, lightbox).

> Observação: O projeto, tal como está neste repositório, é um site estático — não inclui um back-end para processamento real de pedidos ou pagamentos. Integração com gateways de pagamento e persistência de pedidos requerem desenvolvimento adicional (API/serviços terceiros).

---

## 2. Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Git & GitHub (para versionamento e hospedagem via GitHub Pages)
- Bibliotecas incluídas em `vendor/` (ex.: jQuery, Bootstrap, slick, magnific-popup)

---

## 3. Como executar o projeto localmente

Passo a passo (sem necessidade de instalar dependências):

1. Clone o repositório:

```powershell
cd C:\Users\administrator\Desktop
git clone https://github.com/Duarte-Mondlane/Mondlane-Store.git
cd Mondlane-Store
```

2. Abra a pasta do projeto no explorador de arquivos ou no seu editor.
3. Abra o ficheiro `index.html` no navegador (duplo clique) para uma visualização rápida.

Opcional — executar via servidor HTTP (recomendado para testar recursos que usam requisições):

```powershell
# Com Python 3
python -m http.server 8000
# Depois aceda a http://localhost:8000

# Ou com Node (npx)
npx http-server -p 8000
# Depois aceda a http://localhost:8000
```

---

## 4. Versão hospedada (GitHub Pages)

A versão publicada está disponível em:

https://duarte-mondlane.github.io/Mondlane-Store



---

## 5. Estrutura de pastas do projeto

Exemplo da estrutura principal (principais ficheiros e pastas):

- `index.html`
- `product.html`
- `product-detail.html`
- `shoping-cart.html`
- `login.html`
- `contact.html`
- `about.html`
- `README.md`
- `assets/` (CSS, componentes, layout)
- `css/` (CSS adicional)
- `js/` (scripts principais)
- `images/` (imagens de produto, ícones)
- `fonts/` (fontes e ícones)
- `vendor/` (bibliotecas de terceiros: jQuery, Bootstrap, slick, etc.)

> Nota: A estrutura pode conter subpastas adicionais (por exemplo `assets/css/components`, `assets/js`), conforme o projeto.

---

## 6. Funcionalidades principais

- Navegação por categorias e listagem de produtos.
- Página de detalhe de produto com galeria de imagens.
- Carrinho de compras com listagem de itens selecionados e total (front-end).
- Interface de login (página `login.html`) — apenas front-end.
- Formulário de contacto (página `contact.html`) — pode ser integrado a serviços como Formspree/Netlify Forms.
- Layout responsivo para dispositivos móveis e desktop.

---

## 7. Como aceder ao repositório e contribuir

- Repositório: https://github.com/Duarte-Mondlane/Mondlane-Store
- Para contribuir: crie um fork, faça alterações e submeta um pull request.

---

## 8. Autor

- Duarte Mondlane

---

## 9. Licença

Este projeto é licenciado sob a licença MIT. 

