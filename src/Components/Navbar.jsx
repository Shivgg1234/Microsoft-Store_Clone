import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#111", color: "white" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/apps" style={{ marginRight: "10px" }}>Apps</Link>
      <Link to="/games">Games</Link>
    </nav>
  );
}