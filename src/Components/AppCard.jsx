export default function AppCard({ app }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
      <img src={app.image} alt={app.name} width="100%" />
      <h3>{app.name}</h3>
      <p>{app.category}</p>
      <p>⭐ {app.rating}</p>
    </div>
  );
}