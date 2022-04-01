import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

import { fadeIn } from "../../animations/fadeIn";
import { scale } from "../../animations/scale";

import css from "../../assets/images/technologies/css.png";
import html from "../../assets/images/technologies/html.png";
import js from "../../assets/images/technologies/js.png";
import postgres from "../../assets/images/technologies/postgresql.png";
import react from "../../assets/images/technologies/react.svg";
import redux from "../../assets/images/technologies/redux.svg";
import sass from "../../assets/images/technologies/sass.png";
import nodejs from "../../assets/images/technologies/nodejs.png";
import express from "../../assets/images/technologies/express.png";
import gsap from "../../assets/images/technologies/gsap.png";
import git from "../../assets/images/technologies/git.png";

import "./technologies.scss";

const tech = [html, css, js, react, redux, sass, postgres, nodejs, express, git, gsap];

const Technologies = ({ menuOpen }) => {
    const techRef = useRef();
    const { inViewport } = useInViewport(techRef);
    if (inViewport && !menuOpen) {
        fadeIn(".fadeIn");
        scale(".scale");
    }
    return (
        <div className="technologies" id="technologies">
            <h1 className="fadeIn">Technologies that I use</h1>
            <div className="container fadeIn">
                <div className="grid scale" ref={techRef}>
                    {tech.map((el, i) => (
                        <div className="item" key={i}>
                            <img src={tech[i]} alt={`${tech[i]}-logo`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Technologies;