import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import NavBar from '../navBar/NavBar'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TableBody, TableCell, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function RecipePage() {
    const location = useLocation();
    const recipeId = location.state?.recipeId;
    const API_KEY = "8b1f59a93b0b4627be2b61d364ba89f3"
    const likedRecipes = location.state.likedCount || [];
    //"1c0283e182bd43dfb10593e598f12820"
    //"d13f0132d2ec41ce8e06379ee4590fdc"; // Ensure to keep your API key secure

    const [recipe, setRecipe] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false)

    useEffect(() => {
        if (!recipeId && likedRecipes.length > 0) {
            console.error('No recipe ID found.');
            return
        }
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
    }, [recipeId, [likedRecipes], API_KEY]);

    const IngredientDialog = ({ open, onclose, recipe }) => {
        return (

            <Dialog open={open} onclose={onclose} style={{ width: "auto", height: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <DialogTitle>Ingredients </DialogTitle>
                    <DialogActions>
                        <FontAwesomeIcon icon={faXmark} onClick={onclose} style={{ color: "#ff3c00", marginTop: "-20px", cursor: "pointer" }} />
                    </DialogActions>

                </div>
                <DialogContent>
                    <TableContainer  >
                        <Table sx={{ minWidth: 650 }} size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#ff3c00", color: "white" }}>
                                    <TableCell >Ingredient </TableCell>
                                    <TableCell> Measurement in US</TableCell>
                                    <TableCell> Measurement in metric</TableCell>
                                    <TableCell> Calories </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient, id) => (
                                    <TableRow key={id} sx={{ '&:last-child td,&:last-child th': { border: 0 } }}>
                                        <TableCell>
                                            <Checkbox />
                                            {ingredient.nameClean}
                                        </TableCell>
                                        <TableCell>
                                            {ingredient.measures.us.amount} {ingredient.measures.us.unitLong}
                                        </TableCell>
                                        <TableCell>
                                            {ingredient.measures.metric.amount} {ingredient.measures.metric.unitLong}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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

                </DialogContent>
            </Dialog>

        )
    }
    const openDialog = (event) => {
        event.preventDefault();
        setDialogOpen(true)
    }

    const dialogClose = (event) => {
        event.preventDefault();
        setDialogOpen(false)
    }

    return (
        <>
            <NavBar likedCount={likedRecipes} />
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
                                height: 'auto', width: "160px", flexWrap: "wrap", padding: "15px",
                                backgroundColor: 'rgb(243, 241, 241)', borderRadius: "10px", fontSize: "20px", textAlign: "initial"
                            }}>
                                <div style={{ fontSize: "15px", color: 'gray' }}> ready in: </div>
                                <div style={{ fontSize: "14px", paddingTop: "10px", fontWeight: "500" }}> {recipe.readyInMinutes > 0 ? recipe.readyInMinutes : "N/A"} minutes </div>
                                <div style={{ fontSize: "15px", color: 'gray', paddingTop: "10px" }}> servings: </div>
                                <div style={{ fontSize: "14px", paddingTop: "10px", fontWeight: "500" }}>{recipe.servings} </div>
                                <div style={{ fontSize: "15px", color: 'gray', paddingTop: "10px" }}> health score: </div>
                                <div style={{ fontSize: "14px", paddingTop: "10px", paddingBottom: "10px", fontWeight: "500" }}>{recipe.healthScore} </div>

                                <a href='#' style={{ color: "#ff3c00", fontSize: '15px', textDecoration: "none" }} onClick={openDialog}> Start Cooking Now! <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ff3c00", }} /> </a>
                                <IngredientDialog open={dialogOpen} onclose={dialogClose} recipe={recipe}></IngredientDialog>
                            </div>
                        </div>


                        <div className="container1" style={{ lineHeight: "40px", width: "600px" }}>
                            <h4> Ingredients </h4>
                            {recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient, id) => (
                                <div key={id} >
                                    {ingredient.amount} {ingredient.unit} {ingredient.nameClean}
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
