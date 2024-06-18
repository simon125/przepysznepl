import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      });
  }, [id]);

  if (!recipe) {
    return <article aria-busy="true"></article>;
  }

  return (
    <article style={{ position: "relative" }}>
      <img
        src={recipe.image}
        alt={recipe.name}
        width={350}
        style={{ marginTop: 20, position: "absolute", right: 20, top: 0 }}
      />
      <h2>Recipe details</h2>
      <p>
        <b>Rating: </b>
        {Array(Math.floor(recipe.rating))
          .fill("")
          .map((_, index) => (
            <span key={index}>⭐</span>
          ))}
      </p>
      <p>
        <b>Name:</b> {recipe.name}
      </p>
      <p>
        <b>Cuisine:</b> {recipe.cuisine}
      </p>
      <p>
        <b>Ingredients:</b>
      </p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>
        <b>Instructions:</b>
      </p>
      <ul>
        {recipe.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
    </article>
  );
};
