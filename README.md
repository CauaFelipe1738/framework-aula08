# Aula 08 - Conceitos fundamentais do React
A atividade propõe o desenvolvimento de uma aplicação React que utilize os principais conceitos desse framework que inclui: arquivos de extensão JSX, Componentes, Props, Keys, Virtual DOM e Renderização condicional

## Funcionalidades
A solução proposta é um catálogo de jogos que o usuário consegue ver uma lista de jogos e selecionar seus favoritos

## Conceitos utilizados
1. JSX (JavaScript XML)
O JSX é uma extensão da sintaxe do JavaScript utilizada no React. Ele permite escrever código estruturado semelhante ao HTML diretamente dentro do arquivo JavaScript (como visto nos retornos das funções return (<div>...</div>)).

2. Componentes
Componentes são blocos de construção independentes e reutilizáveis. No código acima, dividimos a interface em três funções independentes: App, GameList e GameCard. Isso ajuda a organizar o código e facilita a manutenção.

3. Props (Propriedades)
As Props funcionam como argumentos passados de um componente pai (App) para um componente filho (GameCard). Por exemplo, o componente App passa os atributos title, genre, rating e isFavorite para o GameCard exibi-los na tela.

4. Listas e a Chave (key)
Para renderizar coleções de dados, utilizamos o método .map() do JavaScript dentro do componente GameList. É obrigatório fornecer uma propriedade única key (como key={game.id}) para que o React consiga identificar quais itens foram alterados, adicionados ou removidos.

5. Renderização Condicional
A renderização condicional permite exibir elementos diferentes na tela com base em uma condição lógica. No código, usa-se operadores ternários (condição ? verdadeiro : falso) para:

- Mostrar uma mensagem caso a lista de jogos esteja vazia (games.length === 0).

- Alternar o texto e o estilo do selo "⭐ Jogo Favorito" dependendo do estado do jogo.

6. Virtual DOM
O Virtual DOM é uma cópia leve do DOM real mantida na memória pelo React. Quando o usuário clica no botão "Favoritar", o estado muda, gerando uma nova árvore de Virtual DOM. O React compara essa nova árvore com a anterior através de um algoritmo de diferenciação (diffing) e atualiza no DOM real apenas o elemento que mudou (neste caso, o status e o botão do card específico), garantindo alta performance.

```mermaid
graph TD
    subgraph Virtual DOM (In-Memory / Leve)
        A1[Estado Atualiza] --> B1[Novo VDOM Gerado]
        B1 --> C1[Algoritmo de Diffing Compara Árvores]
        C1 --> D1[Isola Apenas o Elemento Alterado ex: &lt;span&gt;]
    end

    subgraph DOM Real (Navegador / Pesado)
        A2[Modificação Direta solicitada] --> B2[Recálculo de Layout - Reflow]
        B2 --> C2[Repintura da Tela - Repaint]
        C2 --> D2[Atualização de toda a estrutura ou bloco pai]
    end

    style D1 fill:#d4edda,stroke:#28a745,color:#155724
    style D2 fill:#f8d7da,stroke:#dc3545,color:#721c24
```