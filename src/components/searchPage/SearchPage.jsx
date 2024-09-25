


import NavBar from '../navBar/NavBar'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputAdornment from '@material-ui/core/InputAdornment';
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import RecipeCard from '../recipeCard/RecipeCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Chip from '@mui/material/Chip';


function SearchPage() {
    const API_KEY = "1c0283e182bd43dfb10593e598f12820"
    //"d13f0132d2ec41ce8e06379ee4590fdc"
    // "1c0283e182bd43dfb10593e598f12820";// mk9810
    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));


    const [recipes, setRecipes] = useState([]);
    const [prevArray, setPrev] = useState([]);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [chipsOn, setChipsOn] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLabel, setSelectedLabel] = useState(null);

    const [totalResults, setTotalResults] = useState(0);
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Vegetarian' },
        { key: 1, label: 'Vegan' },
        { key: 2, label: 'Dessert' },
        { key: 3, label: 'Beverage' },
        { key: 4, label: 'Breakfast' },
        { key: 5, label: 'Lunch' },
        { key: 6, label: 'Dinner' },
        { key: 7, label: 'Salad' },
        { key: 8, label: 'Healthy' },
        { key: 9, label: 'Dairy Free' },
        { key: 10, label: 'Gluten Free' },
    ]);
    const [chipVariants, setChipVariants] = useState(
        chipData.map((chip) => ({ key: chip.key, variant: 'outlined' }))
    );
    const handleChange = (event, value) => {
        setCurrentPage(value);
        const newOffset = (value - 1) * 20;
        setOffset(newOffset);
    };


    useEffect(() => {
        searchRecipes();
        if (selectedLabel !== null) {
            handleData(selectedLabel);
            setSelectedLabel(null); // Clear selected label after processing
        }

    }, [offset], [chipVariants]);

    const searchRecipes = async () => {
        // Check if the searchTerm is empty and handle it appropriately
        if (!searchTerm) {
            return; // Exit the function early if there's no search term
        }

        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&addRecipeInformation=true&offset=${offset}&number=20&apiKey=${API_KEY}`
            );

            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setTotalResults(data.totalResults);
            setRecipes(data.results);
        } catch (err) {
            console.error('Error fetching recipes:', err);
        }
    };

    const handleClick = (key) => {
        setChipVariants((prevVariants) => {
            const updatedVariants = prevVariants.map((chip) =>
                chip.key === key
                    ? { ...chip, variant: chip.variant === 'outlined' ? 'filled' : 'outlined' }
                    : chip
            );
            // Immediately update data based on new chip variants
            handleData(updatedVariants);
            return updatedVariants;
        });
    };

    const handleData = (updatedVariants) => {
        const filledChips = updatedVariants.filter((chip) => chip.variant === 'filled');
        const updatedPrevArray = filledChips.map((chip) => {
            const chipDataItem = chipData.find((item) => item.key === chip.key);
            return chipDataItem ? chipDataItem.label : '';
        }).filter((label) => label); // Filter out any empty labels

        if (updatedPrevArray.length > 0) {
            setChipsOn(true)
            setPrev(updatedPrevArray);
            setSearchTerm(updatedPrevArray.join(" "));
        }

    };





    const totalPages = Math.ceil(totalResults / 20);


    return (
        <>
            <NavBar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack search bar and results vertically
                    alignItems: 'center',
                    width: '100vw',
                    marginTop: '90px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%',
                        maxWidth: 600,
                        marginBottom: '100px' // Add some space below the search bar
                    }}
                >
                    <TextField
                        fullWidth
                        id="fullWidth"
                        value={chipsOn == true ? "" : searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={chipsOn == false ? "Search by keywords.." : ""}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ff6600" }} />
                                    {chipData.map((chip) => (
                                        chipVariants.find((c) => c.key === chip.key)?.variant == 'filled' ?
                                            <Chip
                                                key={chip.key}
                                                variant={chipVariants.find((c) => c.key === chip.key)?.variant || 'outlined'}
                                                label={chip.label}
                                                onClick={() => handleClick(chip.key)}
                                                style={{ marginLeft: '15px', color: 'white', backgroundColor: '#ff3c00' }}
                                                icon={chipVariants.find((c) => c.key === chip.key)?.variant === 'outlined' ? <AddCircleIcon style={{ color: 'white' }} /> : <CancelIcon style={{ color: 'white' }} />}
                                            /> : ""
                                    ))}
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        size="medium"
                        variant="contained"
                        style={{
                            color: "#ff3c00",
                            outlineColor: "black",
                            background: 'white',
                        }}
                        onClick={() => searchRecipes()}
                    >
                        SEARCH
                    </Button>
                </Box>
                <div>




                    <div>
                        {chipData.map((chip) => (
                            <Chip
                                key={chip.key}
                                variant={chipVariants.find((c) => c.key === chip.key)?.variant || 'outlined'}
                                label={chip.label}
                                onClick={() => handleClick(chip.key, chip.label)}
                                style={{ marginLeft: '15px', color: 'white', backgroundColor: '#ff3c00', marginBottom: "30px", marginTop: '-50px' }}
                                icon={chipVariants.find((c) => c.key === chip.key)?.variant === 'outlined' ? <AddCircleIcon style={{ color: 'white' }} /> : <CancelIcon style={{ color: 'white' }} />}
                            />
                        ))}
                    </div>




                </div>
                <div className='search'>
                    {
                        recipes?.length > 0 ? (
                            <>
                                <div className="containerSearch" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                                    {recipes.map((recipe) => (<RecipeCard recipe={recipe} key={recipe.id} />))}
                                </div>
                                <Stack spacing={2} sx={{ marginTop: '100px', marginBottom: '20px', marginLeft: "650px" }}>
                                    <Pagination
                                        showFirstButton
                                        showLastButton
                                        onChange={handleChange}
                                        page={currentPage}
                                        count={totalPages}
                                        renderItem={(item) => (
                                            <PaginationItem
                                                style={{ backgroundColor: "#ff3c00" }}
                                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                                {...item}
                                            />
                                        )}
                                    />
                                </Stack>
                            </>
                        ) : ""
                    }
                </div>
                <div style={{ width: '100%', marginTop: '100px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ff3c00" fillOpacity="1" d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,122.7C1040,128,1120,192,1200,208C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    </svg>


                </div>
            </Box>
        </>
    );
}


export default SearchPage;



