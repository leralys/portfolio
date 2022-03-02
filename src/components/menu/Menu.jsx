import "./menu.scss"

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
            </ul>
        </div>
    )
}
export default Menu;