import { useRecipeStore } from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteRecipe = () => {
  const { id } = useParams();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(Number(id));
    navigate('/');
  };

  return (
    <div>
      <p>Are you sure you want to delete this recipe?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  );
};

export default DeleteRecipe;
