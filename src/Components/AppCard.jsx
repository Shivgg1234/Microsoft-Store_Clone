import "./AppCard.css";

export default function AppCard({ app }) {
  return (
    <div className="app-card">
      
      <img src={app.image} alt={app.name} />

      <h3>{app.name}</h3>

      <p>{app.category}</p>

      <span>⭐ {app.rating}</span>

    </div>
  );
}