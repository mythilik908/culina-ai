import { useLocation } from 'react-router-dom';
import NavBar from '../navBar/NavBar'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { faHeart, faUtensils, faSpoon, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FavPage.css'
function FavPage() {
    const navigate = useNavigate();
    const API_KEY = "8b1f59a93b0b4627be2b61d364ba89f3"
    //"d13f0132d2ec41ce8e06379ee4590fdc"
    //"1c0283e182bd43dfb10593e598f12820";
    const location = useLocation();
    const likedRecipes = location.state.likedCount || [];
    console.log(likedRecipes)
    const [recipesData, setRecipesData] = useState([]); // To store recipe summaries

    // Fetch each recipe's details when the page loads
    useEffect(() => {
        if (likedRecipes.length > 0) {
            searchRecipes(likedRecipes);

        }
    }, [likedRecipes]);

    const handleNavigate = (recipeId) => {
        if (recipeId) {
            navigate('/recipe', { state: { recipeId } });
        } else {
            console.error("Recipe ID is missing.");
        }
    }

    const searchRecipes = async (recipeIds) => {
        try {
            const resp = recipeIds.map(recipeId =>
                fetch(
                    `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`)
                    .then(response => response.ok ? response.json() : Promise.reject("Error fetching"))
                    .then(data => ({ id: recipeId, title: data.title, image: data.image, ready: data.readInMinutes, servings: data.servings })
                    ))
            const recipes = await Promise.all(resp)
            setRecipesData(recipes)
        } catch (err) {
            console.error('Error fetching recipes:' + err);
        }
    };

    return (
        <>
            <NavBar likedCount={likedRecipes} />
            <div className='fav'>
                <p style={{ fontSize: "14px", letterSpacing: "2px", fontWeight: "600", marginTop: "40px" }}>FAVORITES:</p>
                {recipesData.map((recipe, index) => (
                    <>
                        <div key={`${recipe.id}-${index}`} className='images'>
                            <img src={recipe.image} width={150} height={100} style={{ borderRadius: "10px", paddingBottom: "40px", paddingRight: "10px", paddingTop: "10px" }} />
                            <FontAwesomeIcon
                                icon={faHeart}
                                size="sm"
                                style={{ color: "#ff3c00", cursor: 'pointer', marginTop: "10px", marginLeft: "-3px", paddingRight: "10px" }}
                            />
                            <a
                                href="#"
                                onClick={() => handleNavigate(recipe.id)}
                                style={{ textDecoration: 'none', color: '"#ff3c00"' }}
                            >
                                <h5>{recipe.title}</h5> {/* Clickable recipe title */}
                            </a>
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginLeft: "200px", marginTop: "-80px" }}>
                            <FontAwesomeIcon icon={faSpoon} style={{ color: "#ff3c00" }} />
                            <p style={{ marginTop: "-2px", fontSize: "15px" }}> {recipe.ready}</p>
                            <FontAwesomeIcon icon={faUtensils} style={{ color: "#ff3c00" }} />
                            <p style={{ marginTop: "-2px", fontSize: "15px", fontWeight: "600" }}> {recipe.servings}</p>
                            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ff3c00", cursor: "pointer" }} />
                        </div>

                    </>
                ))}
            </div>
            <div style={{ width: '100%', marginTop: '100px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ff3c00" fillOpacity="1" d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,122.7C1040,128,1120,192,1200,208C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>


            </div>
        </>
    );
}

export default FavPage;
