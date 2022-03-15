import "./navbar.scss"
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <nav className={"navbar " + (menuOpen ? "active" : "")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#hero" className="logo">Lera Lysko</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span>+972 58 627 6306</span>
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
        </nav>
    )
}
export default Header;