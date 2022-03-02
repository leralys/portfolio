import photo from "../../assets/images/photo.jpg";
import bracketsSign from "../../assets/images/bracketsSign.png";
import downArrow from "../../assets/images/downArrow.png";
import "./hero.scss";
const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="left">
                <img src={bracketsSign} alt="Brackets sign" />
                <div className="imgContainer">
                    <img id="photo" src={photo} alt="Lera Lysko Full Stack Developer" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Lera Lysko</h1>
                    <h3><span>Full Stack</span> Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src={downArrow} alt="Down arrow" />
                </a>
            </div>
        </div>
    )
}

export default Hero;
