import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL.
  const navigate = useNavigate(); // For navigation (e.g., back button).
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details from the mock data.
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error fetching recipe details:', error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back
      </button>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <h2 className="text-xl font-semibold mb-4">Ingredients:</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-4">Cooking Instructions:</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

    </div>
  );
};

export default RecipeDetail;
