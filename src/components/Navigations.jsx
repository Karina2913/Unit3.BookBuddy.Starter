/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link, useNavigate } from 'react-router-dom';

export default function Navigations ({ token, setToken }) {
    const navigate = useNavigate("");

    const handleLogOut = () => {
        setToken(null);
        navigate("/login");
    }

    return (
        <nav className="navbar">
            <div className="links">
                {token ? (
                    <button onClick={handleLogOut}>Log Out</button>
                ) : (
                    <>
                        <Link className="link" to="/register">Sign Up</Link>
                        <Link className="link" to="/login">Log In</Link>
                    </>
                )}
            </div>
        </nav>
    )
}