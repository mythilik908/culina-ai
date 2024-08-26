import Logo from "../../assets/logo.png";
import Berry from "../../assets/berry.jpg";
import Curry from "../../assets/curry.jpg";
import Glove from "../../assets/glove.jpg";
import Mobile from "../../assets/mobile.jpg";
import Bowl from "../../assets/bowl.jpg";

import { motion } from "framer-motion"
import "./NavBar.css";
import SelectMenu from "../selectMenu/SelectMenu";
import { faTags, faMagnifyingGlass, faThumbtack, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const options = ['HOME', 'ABOUT']
const menuOptions = ['FEATURES', 'ADD & IMPORT', 'ORGANISE & SEARCH', 'VIDEO']
const moreOptions = ['MORE']

function NavBar() {
    return (
        <div>
            <div className="topBar">
                <img src={Logo} alt="logo" width={170} height={50} style={{ marginTop: "15px" }}></img>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: "35px", marginTop: "10px", gap: 20 }}>
                    <SelectMenu options={options} ></SelectMenu>
                    <SelectMenu options={menuOptions}></SelectMenu>
                    <SelectMenu options={moreOptions}></SelectMenu>
                </div>
            </div>

            <div className="curvedUp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff3c00" fill-opacity="1" d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,122.7C1040,128,1120,192,1200,208C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
            <div className="curved">
                <div className="title">
                    Get recipe organised
                </div>
                <p style={{ fontSize: "25px", textAlign: "center" }}>Streamline your recipe collection and effortlessly locate the perfect dish for any occasion</p>
                <p style={{ fontSize: "25px", textAlign: "center" }}> Get Started </p>
                <Link to=""> </Link>
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
                    <img src={Berry} alt="logo" width={400} height={350} style={{ marginTop: "-300px", marginLeft: "100px" }}></img>
                </motion.div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(239, 237, 237)" fill-opacity="1" d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,122.7C1040,128,1120,192,1200,208C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>

            <div className="appbody" style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ marginLeft: "300px" }} className="shadows-into-light-regular"> Clear the clutter </p>
                <div style={{ marginLeft: "300px", width: "440px", lineHeight: "40px" }}>
                    <h1 style={{ fontSize: "40px" }}> Organise your recipes to suit you </h1>
                    <div style={{ width: "400px ", lineHeight: "30px" }}>
                        Keep your digital recipe book in top shape and avoid the hunt with our search and filter tools.
                        <div style={{ marginLeft: "3px", textAlign: "justify" }}>
                            <br />
                            <FontAwesomeIcon icon={faTags} size="lg" style={{ color: "#74C0FC", paddingRight: "10px" }} />

                            <b>Tags.</b> Categorise your recipes and sub-filter with combinations. Add some emojis too 😋
                            <br />

                            <br />
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#74C0FC", paddingRight: "10px" }} />

                            <b>Search & Filter.</b>Find recipes using keywords, name, source, or with leftovers in your fridge!
                            <br />

                            <br />
                            <FontAwesomeIcon icon={faThumbtack} size="lg" style={{ color: "#74C0FC", paddingRight: "10px" }} />

                            <b>Link & Pin.</b> Pin your active recipes for quick access & link related dishes.
                            <br />

                            <br />
                            <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: "#74C0FC", }} />
                            <b> Notes & nutrition.</b> Additional text fields for you to add extra recipe info with USDA nutrition display.
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <img src={Mobile} width={600} height={650} style={{ marginLeft: "790px", marginTop: "-610px" }} ></img>
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
                    <img src={Bowl} alt="logo" width={460} height={450} style={{ marginLeft: "-500px" }}></img>
                </div>

                <div style={{ marginLeft: "300px", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-450px" }} className="shadows-into-light-regular">
                        Leftover Ingredients
                    </div>
                    <div style={{ marginLeft: "600px", width: "520px", lineHeight: "40px", textAlign: "justify" }}>
                        <h1 style={{ fontSize: "40px" }}>   What's in my fridge? </h1>
                        Don't fancy going to the shops? Enter ingredients you want to include and exclude in your search and Gourmet Guide will show what you can make from your recipes!
                    </div>
                </div>
            </div>

        </div >

    )
}

export default NavBar;