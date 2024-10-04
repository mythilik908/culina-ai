import Berry from "../../assets/noodle.webp";
import Curry from "../../assets/taco.webp";
import Glove from "../../assets/burger1.webp";
import Mobile from "../../assets/cooker.png";
import Bowl from "../../assets/veggie.png";
import { motion } from "framer-motion"
import "./MainPage.css"
import { useNavigate } from 'react-router-dom';
import { faTags, faMagnifyingGlass, faThumbtack, faCloudArrowUp, faHeart, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "../navBar/NavBar";
import { useState } from "react";
import Button from '@mui/material/Button';


function MainPage() {
    const navigate = useNavigate();
    const tranferPage = () => {
        navigate('/search')
    }


    return (
        <div>
            <NavBar />
            <div className="curvedUp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff3c00" fill-opacity="1" d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,122.7C1040,128,1120,192,1200,208C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
            <div className="curved">
                <div className="title">
                    Get Recipes Sorted!
                    <Button size="medium" variant="contained" style={{ color: "#ff3c00", outlineColor: "black", marginLeft: "11px", background: 'white' }} onClick={tranferPage}>Get Started Now</Button>

                </div>
                <p style={{ fontSize: "25px", textAlign: "center" }}>Say goodbye to clutter and effortlessly find the perfect recipe for every occasion—deliciously organized and always within reach!</p>

                <motion.div
                    initial={{ y: "-190px" }}
                    animate={{ scale: 1, x: 10, y: -100 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    <img src={Curry} alt="logo" width={260} height={250} style={{ marginLeft: "390px", marginTop: "-242px", position: "absolute" }}></img>

                </motion.div>
                <motion.div
                    initial={{ y: -30, x: 400 }}
                    animate={{ scale: 1, y: -70, x: 40 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    <img src={Glove} alt="logo" width={450} height={450} style={{ marginLeft: "1137px", marginTop: "-243px" }}></img>
                </motion.div>
                <motion.div
                    initial={{ y: "150px" }}
                    animate={{ scale: 1, x: 20, y: 20 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    <img src={Berry} alt="logo" width={350} height={300} style={{ marginTop: "-300px", marginLeft: "100px" }}></img>
                </motion.div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(239, 237, 237)" fill-opacity="1" d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,122.7C1040,128,1120,192,1200,208C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>

            <div className="appbody" style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ marginLeft: "300px" }} className="shadows-into-light-regular"> Declutter Your Recipes
                </p>
                <div style={{ marginLeft: "300px", width: "440px", lineHeight: "40px" }}>
                    <h1 style={{ fontSize: "40px" }}> Organise your recipes to suit you </h1>
                    <div style={{ width: "400px ", lineHeight: "30px" }}>
                        Keep your digital recipe book in top shape and avoid the hunt with our search and filter tools.
                        <div style={{ marginLeft: "3px", textAlign: "justify" }}>
                            <br />
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#74C0FC", paddingRight: "10px" }} />

                            <b>Search & Filter.</b>Find recipes by keyword, name, source, or even ingredients you have on hand.
                            <br />

                            <br />
                            <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "#74C0FC", paddingRight: "10px" }} />

                            <b>Favorites.</b>Save and quickly access your favorite dishes.
                            <br />

                            <br />
                            <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: "#74C0FC", }} />
                            <b> Nutrition at your fingertips.</b> View detailed nutrition facts and weight watcher points with ease.
                            <br />
                            <br />
                            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#74C0FC", }} />
                            <b> Add your notes.</b> Capture every delicious detail you discover.


                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <video
                        width={400}
                        height={650}
                        style={{ marginLeft: "790px", marginTop: "-610px" }}
                        muted
                        autoPlay
                        loop
                        src={require('../../assets/mk.webm')}
                        type="video/webm"
                    >
                    </video>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,122.7C1040,128,1120,192,1200,208C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
            <div className="sectionTwo" style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "450px", marginLeft: "100px" }}>
                        <path fill="#F2F4F8" d="M64.3,-50.1C77.9,-34.2,79.8,-7.8,74.1,16.7C68.3,41.2,54.9,63.7,37.4,68.7C19.9,73.7,-1.8,61.2,-19.2,49.2C-36.5,37.2,-49.7,25.8,-53,11.9C-56.4,-2,-50,-18.4,-39.5,-33.6C-29,-48.8,-14.5,-62.9,5.4,-67.2C25.3,-71.5,50.7,-66.1,64.3,-50.1Z" transform="translate(100 100)" />
                    </svg>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "350px", marginLeft: "-150px" }}>
                        <path fill="#F2F4F8" d="M38.3,24C27.6,40.6,-18.2,38.8,-30.4,21.2C-42.7,3.7,-21.3,-29.5,1.6,-28.6C24.5,-27.7,48.9,7.3,38.3,24Z" transform="translate(100 100)" />
                    </svg>
                    <motion.img
                        src={Bowl}
                        alt="logo"
                        width={460}
                        height={450}
                        style={{ marginLeft: "-550px" }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Adjust duration and ease as needed
                    />
                </div>

                <div style={{ marginLeft: "300px", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-450px" }} className="shadows-into-light-regular">
                        Leftover Ingredients
                    </div>
                    <div style={{ marginLeft: "600px", width: "520px", lineHeight: "40px", textAlign: "justify" }}>
                        <h1 style={{ fontSize: "40px" }}>   What’s in Your Fridge?
                        </h1>
                        Don’t feel like shopping? Enter the ingredients you want to include or exclude, and Gourmet Guide will find delicious recipes tailored to what you have on hand!


                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;