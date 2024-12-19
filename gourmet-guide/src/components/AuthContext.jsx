import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        picture: ''
    });

    const login = (userData) => {
        setIsAuthenticated(true);
        setUserData({
            name: userData.name,
            picture: userData.picture
        });

    };



    // const clearAllBrowserData = () => {
    //     // Clear all storage
    //     localStorage.clear();
    //     sessionStorage.clear();

    //     // Clear all cookies
    //     document.cookie.split(";").forEach(cookie => {
    //         const eqPos = cookie.indexOf("=");
    //         const name = eqPos > -1 ? cookie.slice(0, eqPos).trim() : cookie.trim();
    //         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    //         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + window.location.hostname;
    //     });
    // };

    const logout = async () => {
        try {
            // Start logout process
            const response = await fetch('http://localhost:8080/api/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            });

            // Clear all browser data
            //  clearAllBrowserData();

            // Reset auth state
            setIsAuthenticated(false);
            setUserData({ name: '', picture: '' });

            if (response.ok) {
                const redirectUrl = response.headers.get('Location');
                if (redirectUrl) {
                    const timestampedUrl = `${redirectUrl}${redirectUrl.includes('?') ? '&' : '?'}t=${Date.now()}`;
                    window.location.replace(timestampedUrl);
                } else {
                    window.location.replace('/login');
                }
            } else {
                // Fallback logout
                window.location.replace('https://accounts.google.com/Logout');
            }
        } catch (error) {
            console.error('Logout error:', error);
            // clearAllBrowserData();
            window.location.replace('https://accounts.google.com/Logout');
        }
    };

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/auth-status', {
                    credentials: 'include',
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                        'Pragma': 'no-cache',
                        'Expires': '0',
                    }
                });

                if (!response.ok) {
                    // clearAllBrowserData();
                    setIsAuthenticated(false);
                    setUserData({ name: '', picture: '' });
                    return;
                }

                const userResponse = await fetch('http://localhost:8080/api/user', {
                    credentials: 'include',
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                        'Pragma': 'no-cache',
                        'Expires': '0',
                    }
                });

                if (userResponse.ok) {
                    const data = await userResponse.json();
                    setIsAuthenticated(true);
                    setUserData({
                        name: data.name,
                        picture: data.picture,
                    });
                }
            } catch (error) {
                console.error('Auth check error:', error);
                // clearAllBrowserData();
                setIsAuthenticated(false);
                setUserData({ name: '', picture: '' });
            }
        };

        checkAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);