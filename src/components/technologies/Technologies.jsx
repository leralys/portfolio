import { useMemo } from "react";
import "./technologies.scss";
import css from "../../assets/images/technologies/css.png";
import html from "../../assets/images/technologies/html.png";
import js from "../../assets/images/technologies/js.png";
import postgres from "../../assets/images/technologies/postgresql.png";
import react from "../../assets/images/technologies/react.svg";
import redux from "../../assets/images/technologies/redux.svg";
import sass from "../../assets/images/technologies/sass.png";
import nodejs from "../../assets/images/technologies/nodejs.png";
import express from "../../assets/images/technologies/express.png";

const tech = [css, html, sass, js, react, redux, postgres, nodejs, express];

const Technologies = () => {
    const root = useMemo(() => document.querySelector(":root"), []);
    const parallaxHandler = e => {
        const x = (e.clientX - window.innerWidth / 2) / 150;
        const y = (e.clientY - window.innerHeight / 2) / 100;
        root.style.setProperty('--posX', -x);
        root.style.setProperty('--posY', -y);
    }
    const parallaxTouchHandler = e => {
        const x = (e.touches[0].clientX - window.innerWidth / 2) / 100;
        const y = (e.touches[0].clientY - window.innerHeight / 2) / 100;
        root.style.setProperty('--posX', -x);
        root.style.setProperty('--posY', -y);
    }
    const resetParallax = e => {
        root.style.setProperty('--posX', 0);
        root.style.setProperty('--posY', 0);
    }
    return (
        <div className="technologies" id="technologies"
            onMouseMove={parallaxHandler}
            onTouchMove={parallaxTouchHandler}
            onTouchEnd={resetParallax}>
            <h1>Technologies that I use</h1>
            <div className="container">
                <div className="grid">
                    {tech.map((el, i) => (
                        <div className="item" key={i}>
                            <img src={tech[i]} alt={`${tech[i]}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Technologies;