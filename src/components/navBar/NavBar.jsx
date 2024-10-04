import Logo from "../../assets/logo.png";
import "./NavBar.css";
import SelectMenu from "../selectMenu/SelectMenu";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

const options = ['HOME', 'ABOUT']
const menuOptions = ['FEATURES', 'ADD & IMPORT', 'ORGANISE & SEARCH', 'VIDEO']
const moreOptions = ['MORE']

function NavBar({ likedCount = [] }) {
    console.log(likedCount)
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/favorites', { state: { likedCount } })
    }
    const handleNavigation = () => {
        navigate('/', { state: { likedCount } })
    }
    return (

        < div >

            <div className="topBar">
                <img src={Logo} alt="logo" width={170} height={50} style={{ marginTop: "15px", cursor: "pointer" }} onClick={handleNavigation} ></img>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: "35px", marginTop: "10px", gap: 20, color: "gray" }}>
                    <SelectMenu options={options} ></SelectMenu>
                    <SelectMenu options={menuOptions}></SelectMenu>
                    <SelectMenu options={moreOptions}></SelectMenu>
                    <FontAwesomeIcon
                        icon={solidHeart}
                        size="xl"
                        style={{ color: "#ff3c00", cursor: 'pointer', marginTop: "12px", marginLeft: "800px", }}
                        onClick={handleNavigate}
                    />
                    <div style={{
                        backgroundColor: '#ff3c00',
                        borderRadius: '50%',
                        padding: '2px 5px',
                        zIndex: 3,
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '10px',
                        marginTop: "21px", marginLeft: "-25px"

                    }}>
                        {likedCount.length > 0 ? likedCount.length : 0}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default NavBar;