import Logo from "../../assets/logo.png";
import "./NavBar.css";
import SelectMenu from "../selectMenu/SelectMenu";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from "../AuthContext";

const options = ['HOME', 'ABOUT']
const menuOptions = ['FEATURES', 'ADD & IMPORT', 'ORGANISE & SEARCH', 'VIDEO']
const moreOptions = ['MORE']

function NavBar({ likedCount = [] }) {

    const { isAuthenticated, userData, login, logout } = useAuth();

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/favorites', { state: { likedCount } })
    }
    const handleNavigation = () => {
        navigate('/', { state: { likedCount } })
    }

    const handleLogout = async () => {
        try {
            logout();
            window.location.href = "/";
        }
        catch (error) {
            console.error(error)
            window.location.href = "/";
        }
    }


    const handleLogin = () => {
        // Open Google OAuth window
        window.open(
            'http://localhost:8080/oauth2/authorization/google',  // This will show the Google login interface
            'login',
            'width=500,height=600'
        );

        const handleMessage = (event) => {
            if (event.origin !== 'http://localhost:8080') return;

            if (event.data.type === 'oauth-success') {
                // Handle successful login
                login({
                    name: event.data.name,
                    picture: event.data.picture
                });

                // Navigate after successful login
                window.location.href = '/search';

                // Clean up
                window.removeEventListener('message', handleMessage);
            }
        };

        window.addEventListener('message', handleMessage);
    };
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
                    <div className="profile">
                        <p>{userData.name}</p>
                        <div className="profile__logout">
                            {userData.picture && <img src={userData.picture} />}
                            {isAuthenticated ?
                                <Button
                                    size="small"
                                    variant="contained"
                                    style={{
                                        background: "#ff3c00",
                                        outlineColor: "black",
                                        color: 'white',
                                    }}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                                : <Button
                                    size="small"
                                    variant="contained"
                                    style={{
                                        background: "#ff3c00",
                                        outlineColor: "black",
                                        color: 'white',
                                    }}
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default NavBar;