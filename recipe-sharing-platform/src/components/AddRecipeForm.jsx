import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !instructions) {
      alert('Please fill out all fields.');
      return;
    }
    console.log({ title, ingredients, instructions });
    setTitle('');
    setIngredients('');
    setInstructions('');
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Steps"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
