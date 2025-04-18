import { useLocation } from 'react-router-dom';
import React, { useEffect, useState, useCallback, useMemo } from "react";
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
    const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const likedRecipes = useMemo(() => location.state?.likedCount || [], [location.state?.likedCount]);

    const [recipe, setRecipe] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRecipe = useCallback(async () => {
        if (!recipeId) {
            console.error('No recipe ID found.');
            setError('No recipe ID found.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setRecipe(data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch recipe. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }, [recipeId, API_KEY]);

    useEffect(() => {
        fetchRecipe();
    }, [fetchRecipe]);

    const IngredientDialog = React.memo(({ open, onClose, recipe }) => {
        return (
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <DialogTitle>Ingredients </DialogTitle>
                    <DialogActions>
                        <FontAwesomeIcon icon={faXmark} onClick={onClose} style={{ color: "#ff3c00", marginTop: "-20px", cursor: "pointer" }} />
                    </DialogActions>
                </div>
                <DialogContent dividers>
                    <TableContainer sx={{ maxHeight: 400 }}>
                        <Table stickyHeader size="small">
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{
                                        backgroundColor: "#ff3c00",
                                        color: "white",
                                        fontWeight: "bold",
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 1,
                                    }}>Ingredient</TableCell>
                                    <TableCell sx={{
                                        backgroundColor: "#ff3c00",
                                        color: "white",
                                        fontWeight: "bold",
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 1,
                                    }}>Measurement in US</TableCell>
                                    <TableCell sx={{
                                        backgroundColor: "#ff3c00",
                                        color: "white",
                                        fontWeight: "bold",
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 1,
                                    }}>Measurement in metric</TableCell>
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
                    <h4>Instructions</h4>
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
        );
    });

    const openDialog = useCallback((event) => {
        event.preventDefault();
        setDialogOpen(true);
    }, []);

    const closeDialog = useCallback((event) => {
        event.preventDefault();
        setDialogOpen(false);
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!recipe) return <div>No recipe found</div>;

    return (
        <>
            <NavBar likedCount={likedRecipes.length} />
            <div className='recipeCard1'>
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
            </div>
            <IngredientDialog open={dialogOpen} onClose={closeDialog} recipe={recipe} />
        </>
    );
}

export default RecipePage;