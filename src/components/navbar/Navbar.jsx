import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import "./navbar.scss";

const notify = () => toast('Copied to clipboard!');

const Header = ({ menuOpen, setMenuOpen }) => {
    const [tel, seTel] = useState("+972 58 627 6306");
    const handleClick = () => {
        // console.log(tel);
        navigator.clipboard.writeText(tel);
        notify();
    }
    return (
        <nav className={"navbar " + (menuOpen ? "active" : "")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#hero" className="logo">Lera Lysko</a>
                    <div className="itemContainer"
                        onClick={handleClick}>
                        <PersonIcon className="icon" />
                        <span>{tel}</span>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon" />
                        <span>lyskolera@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            <Toaster containerStyle={{ top: 100 }}
                toastOptions={{
                    className: '',
                    style: {
                        border: '1px solid #3aafa9',
                        padding: '10px',
                        color: '#17252a',
                    },
                }} />
        </nav>
    )
}
export default Header;