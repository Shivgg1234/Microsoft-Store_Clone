export default function GameCard({ game }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <img src={game.background_image} alt={game.name} width="100%" />
      <h3>{game.name}</h3>
      <p>⭐ {game.rating}</p>
    </div>
  );
}
