import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import NavBar from '../navBar/NavBar'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function RecipePage() {
    const location = useLocation();
    const recipeId = location.state.recipeId;
    const API_KEY = "d13f0132d2ec41ce8e06379ee4590fdc"; // Ensure to keep your API key secure

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const showRecipe = async () => {
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                setRecipe(data);
            } catch (err) {
                console.error(err);
            }
        };

        showRecipe();
    }, [recipeId, API_KEY]);

    return (
        <>
            <NavBar />
            <div className='recipeCard1'>
                {recipe && (
                    <div key={recipe.id} style={{ marginLeft: "400px" }}>
                        <h2>{recipe.title}</h2>
                        <div style={{ display: "flex", flexDirection: 'row', marginBottom: "20px", gap: "10px" }}>
                            {recipe.dishTypes.map((chip, index) => (
                                <Stack key={index} direction="row" spacing={5}>
                                    <Chip label={chip} />
                                </Stack>
                            ))}
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "50px" }}>
                            <img style={{ width: "500px", height: "350px", borderRadius: "10px" }}
                                src={recipe.image !== 'N/A' ? recipe.image : 'http://via.placeholder.com/400'}
                                alt={recipe.title} />

                            <div style={{
                                height: 'auto', width: "180px", flexWrap: "wrap", padding: "10px",
                                backgroundColor: 'rgb(243, 241, 241)', borderRadius: "20px", fontSize: "20px"
                            }}>
                                <h6>Ready In Minutes: {recipe.readyInMinutes > 0 ? recipe.readyInMinutes : "N/A"}</h6>
                                <h6>Servings: {recipe.servings}</h6>
                                <h6>Health Score: {recipe.healthScore}</h6>

                            </div>
                        </div>


                        <div className="container1" style={{ lineHeight: "30px", width: "600px" }}>
                            <h4> Ingredients </h4>
                            {recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient, id) => (
                                <div key={id} >
                                    {ingredient.amount} {ingredient.unit} {ingredient.nameClean}
                                </div>
                            ))}
                            <h4> Instructions </h4>
                            {recipe.analyzedInstructions && recipe.analyzedInstructions.map((instruction, index) => (
                                <div key={index}>
                                    <h5>{instruction.name}</h5>
                                    <ol>
                                        {instruction.steps.map((step, stepIndex) => (
                                            <li key={stepIndex}>{parse(step.step)}</li>
                                        ))}
                                    </ol>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default RecipePage;
