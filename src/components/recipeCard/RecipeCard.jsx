import parse from 'html-react-parser';
import React, { useState } from 'react'
import "./RecipeCard.css"
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {

    const navigate = useNavigate();

    const handleNavigate = (recipeId) => {
        navigate('/recipe', { state: { recipeId } })
    }

    return (
        <div className="recipe">
            <div className='recipeCard'>
                <img src={recipe.image !== 'N/A' ? recipe.image : 'http://via.placeholder.com/400'} alt={recipe.title} onClick={() => handleNavigate(recipe.id)}
                    style={{ width: '100%', height: '100%', borderRadius: '30px', cursor: 'pointer' }} ></img>
                <h4>{recipe.title}</h4>
            </div>
        </div>
    )
}

export default RecipeCard;