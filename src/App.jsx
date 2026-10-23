import React, { useState } from 'react';

// 3. Componente GameCard (Uso de Props, JSX e Renderização Condicional)
function GameCard({ title, genre, rating, isFavorite, onToggleFavorite }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '10px 0', borderRadius: '8px', background: '#fafafa' }}>
      <h3>{title}</h3>
      <p><strong>Gênero:</strong> {genre}</p>
      <p><strong>Nota:</strong> {rating}/10</p>
      
      {/* Renderização Condicional usando operador ternário */}
      {isFavorite ? (
        <span style={{ color: '#e67e22', fontWeight: 'bold' }}>⭐ Jogo Favorito</span>
      ) : (
        <span style={{ color: '#7f8c8d' }}>Disponível no catálogo</span>
      )}
      
      <div style={{ marginTop: '10px' }}>
        <button onClick={onToggleFavorite} style={{ padding: '6px 12px', cursor: 'pointer' }}>
          {isFavorite ? 'Remover dos Favoritos' : 'Favoritar'}
        </button>
      </div>
    </div>
  );
}

// 2. Componente GameList (Uso de Listas e .map())
function GameList({ games, onToggleFavorite }) {
  return (
    <div>
      <h2>Meus Jogos</h2>
      
      {/* Renderização Condicional: Verifica se a lista está vazia */}
      {games.length === 0 ? (
        <p>Nenhum jogo cadastrado no momento.</p>
      ) : (
        games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            rating={game.rating}
            isFavorite={game.isFavorite}
            onToggleFavorite={() => onToggleFavorite(game.id)}
          />
        ))
      )}
    </div>
  );
}

// 1. Componente Principal App
export default function App() {
  const [games, setGames] = useState([
    { id: 1, title: 'The Legend of Zelda: Breath of the Wild', genre: 'Aventura', rating: 10, isFavorite: true },
    { id: 2, title: 'Minecraft', genre: 'Sandbox / Sobrevivência', rating: 9, isFavorite: false },
    { id: 3, title: 'Hades', genre: 'Roguelike', rating: 9.5, isFavorite: true },
  ]);

  const handleToggleFavorite = (id) => {
    setGames(
      games.map((game) =>
        game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
      )
    );
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Catálogo Gamer 🎮</h1>
      <p>Aplicativo em React demonstrando conceitos fundamentais de desenvolvimento.</p>
      
      <GameList games={games} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}