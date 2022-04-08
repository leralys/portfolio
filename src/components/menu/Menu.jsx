import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
    const tel = "+972586276306";

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
                    <a href="#technologies">Technologies</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact me</a>
                </li>
                <li className="contact-hidden">
                    <a href={`tel:${tel}`}>+972 58 627 6306</a>
                </li>
                <li className="contact-hidden">
                    <a href="mailto:lyskolera@gmail.com" className="itemWrapper">
                        lyskolera@gmail.com
                    </a>
                </li>
            </ul>
        </div >
    )
}
export default Menu;