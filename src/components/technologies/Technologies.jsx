import "./technologies.scss";
import css from "../../assets/images/technologies/css.png"
import html from "../../assets/images/technologies/html.png"
import js from "../../assets/images/technologies/js.png"
import postgres from "../../assets/images/technologies/postgresql.png"
import react from "../../assets/images/technologies/react1.svg"
import redux from "../../assets/images/technologies/redux-logo.svg"
import sass from "../../assets/images/technologies/sass1.png"

const Technologies = () => {
    return (
        <div className="technologies" id="technologies">
            <h1>Technologies that I use</h1>
            <div className="container">
                <div className="item"><img src={css} alt="css" /></div>
                <div className="item"><img src={html} alt="html" /></div>
                <div className="item"><img src={js} alt="js" /></div>
                <div className="item"><img src={postgres} alt="postgres" /></div>
                <div className="item"><img src={react} id="react" alt="react" /></div>
                <div className="item"><img src={redux} alt="redux" /></div>
                <div className="item"><img src={sass} alt="sass" /></div>
            </div>
        </div>
    )
}
export default Technologies;