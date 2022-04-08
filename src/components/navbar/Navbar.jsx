import { useState, useContext } from "react";
import { Toaster } from "react-hot-toast";
import { notify } from "../../utilities/notify";

import { SizeContext } from '../../App';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from "@mui/icons-material/Email";
import "./navbar.scss";

const Navbar = ({ menuOpen, setMenuOpen }) => {
    const tel = "+972586276306";
    const [copied, setCopied] = useState(false);
    const isComputer = useContext(SizeContext);
    const toaster = <Toaster containerStyle={{ top: 80 }}
        toastOptions={{
            className: "",
            style: {
                duration: 1500,
                border: "1px solid #3aafa9",
                padding: "10px",
                color: "#17252a"
            },
        }}
    />
    const handleClick = (e) => {
        navigator.clipboard.writeText(tel);
        setCopied(true);
        notify();
    }
    return (
        <nav className={"navbar " + (menuOpen ? "active" : "")}>
            <div className="wrapper">
                <div className="left">
                    <p className="logo" onClick={() => window.location.reload()}>Lera Lysko</p>
                    <div className="itemContainer">
                        {isComputer
                            ? <span onClick={(e) => handleClick(e)} className="itemWrapper">
                                <PhoneIcon className="icon" />
                                <span>+972 58 627 6306</span>
                            </span>
                            : <a href={`tel:${tel}`} className="itemWrapper">
                                <PhoneIcon className="icon" />
                                <span>+972 58 627 6306</span>
                            </a>
                        }
                    </div>
                    <div className="itemContainer">
                        <a href="mailto:lyskolera@gmail.com" className="itemWrapper">
                            <EmailIcon className="icon" />
                            <span>lyskolera@gmail.com</span>
                        </a>
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
            {copied ? toaster : null}
        </nav>
    )
}
export default Navbar;