import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import NavBar from '../navBar/NavBar'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function RecipePage() {

    const location = useLocation();

    var recipeId = location.state.recipeId;
    const API_KEY = "d13f0132d2ec41ce8e06379ee4590fdc"
    //"d13f0132d2ec41ce8e06379ee4590fdc " // mkotaru98
    // "1c0283e182bd43dfb10593e598f12820"; //mk9810

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
            <NavBar></NavBar>
            <div className='recipeCard1'>
                {recipe && (
                    <div key={recipe.id} style={{ marginLeft: "300px" }}>
                        <h2>{recipe.title}</h2>
                        <div style={{ display: "flex", flexDirection: 'row', marginBottom: "20px", gap: "10px" }}>
                            {recipe.dishTypes.map((chip) => (
                                <Stack direction="row" spacing={5}>
                                    <Chip label={chip} />
                                </Stack>
                            ))}
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "50px" }}>
                            <img style={{ width: "600px", height: "450px", borderRadius: "30px" }}
                                src={recipe.image !== 'N/A' ? recipe.image : 'http://via.placeholder.com/400'}
                                alt={recipe.title} />


                            <div style={{
                                height: 'auto', width: "250px", flexWrap: "wrap", padding: "10px",
                                backgroundColor: 'rgb(229, 228, 228)', borderRadius: "20px", fontSize: "20px"
                            }} >
                                <h6>Ready In Minutes: {recipe.readyInMinutes > 0 ? recipe.readyInMinutes : "N/A"}</h6>
                                <h6>Servings: {recipe.servings}</h6>
                                <h6>Health Score: {recipe.healthScore}</h6>
                                <h6>Weight Watcher Smart Points: {recipe.weightWatcherSmartPoints}</h6>
                            </div>
                        </div>

                        <div className="card">

                        </div>
                        <div className="container1">
                            <p>{recipe.analyzedInstructions}</p>
                        </div>
                    </div>
                )}
            </div>
        </>


    )
}

export default RecipePage;