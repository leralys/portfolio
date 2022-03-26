import { useRef } from "react";
// import { useInViewport } from "react-in-viewport";
// import { fadeIn } from "../../animations/fadeIn";
import contactMe from '../../assets/images/contactMe.png';
import "./contact.scss";

const Contact = ({ menuOpen }) => {
    const contactFadeIn = useRef();
    // const { inViewport } = useInViewport(worksFadeIn);
    // if (inViewport && !menuOpen) {
    //     fadeIn(".fadeIn");
    // }
    return (
        <div className="contact" id="contact">
            <h1>Contact me</h1>
            <div className="container fadeIn" ref={contactFadeIn}>
                <div className="left">
                    <img src={contactMe} alt="" />
                </div>
                <div className="right">
                    <form action="https://formsubmit.co/lyskolera@gmail.com" method="POST">
                        <input type="text" name="name" placeholder="Your name" required />
                        <input type="email" name="email" placeholder="Your email" required />
                        <textarea placeholder="Tell me something" required />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <footer className="footer"></footer>
        </div>
    );
}
export default Contact;
