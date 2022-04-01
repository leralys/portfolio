import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { yoyo } from "../../animations/yoyo";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import codepen from "../../assets/icons/codepen.png";


import contactMe from "../../assets/images/contactMe.png";

import "./contact.scss";

const Contact = ({ menuOpen }) => {
    const imgRef = useRef();
    const { inViewport } = useInViewport(imgRef);
    if (inViewport && !menuOpen) {
        yoyo(".yoyo");
    }
    return (
        <div className="contact" id="contact">
            <h1>Contact me :)</h1>
            <div className="container" ref={imgRef}>
                <div className="left">
                    <img src={contactMe} alt=""
                        className="yoyo" />
                </div>
                <div className="right">
                    <form action="d2680f5814d80f35cb6f556493fe8e37" method="POST">
                        <input type="text" name="name" placeholder="Your name" required />
                        <input type="email" name="email" placeholder="Your email" required />
                        <input type="hidden" name="_subject" value="New Message from Portfolio!"></input>
                        <textarea name="message" placeholder="Tell me something!" required />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <div className="container ">
                    <div className="Copyright">
                        © Lera Lysko, 2022
                    </div>
                    <div className="icons">
                        <a href="https://github.com/leralys/" noopener norefferer><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/in/lera-lysko-985b6b227/" noopener norefferer><LinkedInIcon /></a>
                        <a href="https://codepen.io/leralys" noopener norefferer><img src={codepen} alt="codepen-logo" style={{ width: "22px", height: "25px" }} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Contact;
