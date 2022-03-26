import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { notify } from "../../utilities/notify";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
    const [tel, seTel] = useState("+972586276306");
    const [copied, setCopied] = useState(false);
    const toaster = <Toaster containerStyle={{ top: 80 }}
        toastOptions={{
            className: "",
            style: {
                duration: 1000,
                padding: "10px",
                color: "#17252a",
                id: "tel"
            },
        }}
    />
    const handleClick = () => {
        navigator.clipboard.writeText(tel);
        setCopied(true);
        notify();
    }
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
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact me</a>
                </li>
                <li className="contact-hidden"
                    onClick={handleClick}>
                    <span> +972 58 627 6306</span>
                </li>
                <li className="contact-hidden">
                    <li> lyskolera@gmail.com</li>
                </li>
            </ul>
            {copied ? toaster : null}
        </div>
    )
}
export default Menu;