import { Link } from "react-router";

export default function ErrorPage() {
  return(
    <div>
      <h1>ErrorPage</h1>
      <Link to="/">
        <button>Retourner à la page d'acceuil</button>
      </Link>
    </div>
  )
}
