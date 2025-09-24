import React from 'react';
import Card from './Card';
import recipeData from './Data';

const Recipes = () => {
  return (
    <main className="card-container">
      {recipeData.map((recipe) => (
        <Card
          key={recipe.id}
          image={recipe.image}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </main>
  );
};

export default Recipes;