import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Recipes } from "./pages/Recipes/Recipes";
import { RecipeDetails } from "./pages/RecipeDetails/RecipeDetails";
import { NotFound } from "./pages/NotFound/NotFound";

export const App = () => {
  return (
    <>
      <header>
        <article>
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>🍔 Przepyszne.pl</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/recipes">Recipes</Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </header>

      <main className="container" style={{ padding: "5vh 0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
