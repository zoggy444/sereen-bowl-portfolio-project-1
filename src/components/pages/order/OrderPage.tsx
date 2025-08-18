import { Link } from "react-router";

export default function OrderPage({userName}:{userName: string}) {
  return (
    <div>
      <h1>Bonjour {userName}</h1>
      <Link to="/">Déconnexion</Link>
    </div>
  )
}
