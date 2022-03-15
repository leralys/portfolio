import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

import { fadeIn } from "../../animations/fadeIn";

import css from "../../assets/images/technologies/css.png";
import html from "../../assets/images/technologies/html.png";
import js from "../../assets/images/technologies/js.png";
import postgres from "../../assets/images/technologies/postgresql.png";
import react from "../../assets/images/technologies/react.svg";
import redux from "../../assets/images/technologies/redux.svg";
import sass from "../../assets/images/technologies/sass.png";
import nodejs from "../../assets/images/technologies/nodejs.png";
import express from "../../assets/images/technologies/express.png";

import "./technologies.scss";

const tech = [css, html, sass, js, react, redux, postgres, nodejs, express];

const Technologies = ({ menuOpen }) => {
    const techFadeIn = useRef();
    const { inViewport } = useInViewport(techFadeIn);
    if (inViewport && !menuOpen) {
        fadeIn(".fadeIn");
    }
    return (
        <div className="technologies" id="technologies">
            <h1 className="fadeIn">Technologies that I use</h1>
            <div className="container fadeIn">
                <div className="grid" ref={techFadeIn}>
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