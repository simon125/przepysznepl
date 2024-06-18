import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <article
      style={{
        padding: 50,
        display: "flex",
        flexDirection: "column",
        gap: 30,
        alignItems: "start",
      }}
    >
      <h2>
        Witaj na stronie <b>Przepyszne.pl</b>
      </h2>
      <p>
        Tylko u nas będziesz mógł poznać najlepsze przepisy z całego świata!
      </p>
      <Link role="button" to="/recipes">
        Chcę coś ugotować
      </Link>
    </article>
  );
};
