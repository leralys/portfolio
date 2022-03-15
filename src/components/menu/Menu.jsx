import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen ? "active" : "")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#hero">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#technologies">Technologies</a>
                </li>
                <li className="contact-hidden">
                    <span className="contact-type"><PersonIcon className="contact-icon" /> tel.</span>
                    <span> +972 58 627 6306</span>
                </li>
                <li className="contact-hidden">
                    <span className="contact-type"><EmailIcon className="contact-icon" /> e-mail</span>
                    <span> lyskolera@gmail.com</span>
                </li>
            </ul>
            {/* <div className={"layer " + (menuOpen ? "active" : "")}></div> */}
        </div>
    )
}
export default Menu;