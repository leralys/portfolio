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
    return (
        <div className="technologies" id="technologies">
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