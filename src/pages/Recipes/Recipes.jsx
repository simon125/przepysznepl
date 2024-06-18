import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DIFFICULTY_COLORS = {
  Easy: "green",
  Medium: "yellow",
  Hard: "red",
};

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  /**
   * Bardziej produkcyjna wersja pobierania
   */
  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();
  //   fetch("https://dummyjson.com/recipes", {
  //     signal: controller.signal,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (isMounted) {
  //         setRecipes(data.recipes);
  //       }
  //     })
  //     .catch(console.log);

  //   return () => {
  //     isMounted = false;
  //     controller.abort("Bo tak");
  //   };
  // }, []);

  return (
    <>
      <article>
        <h2>Recipes</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Difficulty</th>
              <th>Prep time (minutes)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td style={{ color: DIFFICULTY_COLORS[recipe.difficulty] }}>
                  {recipe.difficulty}
                </td>
                <td>{recipe.prepTimeMinutes}</td>
                <td>
                  <Link to={`/recipes/${recipe.id}`}>Show more</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};
