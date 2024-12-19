import React, { useState } from 'react'
import "./RecipeCard.css"
import { useNavigate } from 'react-router-dom';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RecipeCard = ({ recipe, likedRecipes, setLikedRecipes }) => {

    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(false);


    const handleNavigate = (recipeId) => {
        navigate('/recipe', { state: { recipeId } })
    }
    const handleLike = (e, id) => {
        e.stopPropagation();
        if (isLiked) {
            setLikedRecipes(prev => {
                const updatedRecipes = prev.filter(recipeId => recipeId !== id);
                return updatedRecipes;
            });
            setIsLiked(false);
        } else {
            setLikedRecipes(prev => {
                const updatedRecipes = [...prev, id];
                return updatedRecipes; // Return the new state
            });
            setIsLiked(true);
        }
        console.log(likedRecipes)
    };
    return (
        <div className="recipe">
            <div className='recipeCard'>
                <img src={recipe.image !== 'N/A' ? recipe.image : 'http://via.placeholder.com/400'} alt={recipe.title} onClick={() => handleNavigate(recipe.id)}
                    style={{ width: '100%', height: '100%', borderRadius: '30px', cursor: 'pointer' }} ></img>
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        zIndex: 1
                    }}
                    onClick={(e) => handleLike(e, recipe.id)}
                >
                    <FontAwesomeIcon
                        icon={isLiked ? solidHeart : regularHeart}
                        size="sm"
                        style={{ color: isLiked ? "#ff3c00" : "#ccc", cursor: 'pointer' }}
                    />
                </div>
                <h4>{recipe.title}</h4>
            </div>
        </div>
    )
}

export default RecipeCard;