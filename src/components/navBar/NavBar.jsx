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
        </div >

    )
}

export default NavBar;