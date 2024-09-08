import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import NavBar from '../navBar/NavBar'



function RecipePage() {
    useEffect(() => {
        showRecipe();
    })
    const location = useLocation();

    var recipeId = location.state.recipeId;
    const API_KEY = "d13f0132d2ec41ce8e06379ee4590fdc " // mkotaru98
    // "1c0283e182bd43dfb10593e598f12820"; //mk9810

    const [recipe, setRecipe] = useState(null);

    const showRecipe = async (title) => {
        try {
            const response = await fetch(

                `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${API_KEY}`

            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data)
            setRecipe(data)
        } catch (err) {
            console.error(err);
        }

    }
    return (
        <>
            <NavBar></NavBar>
            <div className='recipeCard1'>
                {recipe && (
                    <div key={recipe.id} style={{ marginLeft: "100px" }}>
                        <h4>{recipe.title}</h4>
                        <img style={{ width: "200px", height: "200px" }}
                            src={recipe.image !== 'N/A' ? recipe.image : 'http://via.placeholder.com/400'}
                            alt={recipe.title}
                        />
                        <div className="card">
                            <h6>Dish Type: {recipe.dishTypes.join(", ")}</h6> {/* Assuming dishTypes is an array */}
                            <h6>Ready In Minutes: {recipe.readyInMinutes > 0 ? recipe.readyInMinutes : "N/A"}</h6>
                            <h6>Servings: {recipe.servings}</h6>
                            <h6>Health Score: {recipe.healthScore}</h6>
                            <h6>Weight Watcher Smart Points: {recipe.weightWatcherSmartPoints}</h6>
                        </div>
                        <div className="container1">
                            <p>{parse(recipe.summary)}</p>
                        </div>
                    </div>
                )}
            </div>
        </>


    )
}

export default RecipePage;