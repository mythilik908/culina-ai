import Logo from "../../assets/logo.png";
import "./NavBar.css";
import SelectMenu from "../selectMenu/SelectMenu";


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