import { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";


import { fade } from "../../animations/fade";
import { slideIn } from "../../animations/slideIn";
import { fadeIn } from "../../animations/fadeIn";

import downArrow from '../../assets/images/downArrow.png';

import "./portfolio.scss"

const Portfolio = ({ menuOpen }) => {
    const portfolioAnim = useRef();
    const { inViewport } = useInViewport(portfolioAnim);

    if (inViewport && !menuOpen) {
        slideIn(".slideIn");
        fade(".fade");
        fadeIn(".fadeIn");
    }

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "/carousel/dog.png",
            title: "Check-in app for dog owners",
            desc: "Full stack web application. Built with React, Redux, Express server, PostgreSQL database, Sequelize ORM, Mapbox GL JS, React Router 6, Sass.",
            img: "/carousel/bestBuddiesCarousel.png",
            code: "https://github.com/leralys/bestBuddiesApp",
            demo: "https://bestbuddies.netlify.app/",
        }, {
            id: "2",
            icon: "/carousel/movie.png",
            title: "Movie Search App",
            desc: "Responsive React application that searches for a Movie or TV series. Built with React, Redux, Redux thunk, uses OMDb API.",
            img: "/carousel/movieSearchApp.png",
            code: "https://github.com/leralys/DI_Bootcamp/tree/main/MiniProject_MovieSearchApp/movie-search-app",
            demo: "https://findmovieapp.netlify.app/"
        }, {
            id: "3",
            icon: "/carousel/game.png",
            title: "JavaScript Memory Game",
            desc: "Developers Institute Hackathon winner. Built with JavaScript, HTML5, CSS3.",
            img: "/carousel/findThePairGame.png",
            code: "https://github.com/leralys/mind_game",
            demo: "https://codepen.io/leralys/full/MWEGZga"
        }
    ];
    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="portfolio" id="portfolio">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} ref={portfolioAnim}>
                {data.map((d) => (
                    <div className="container" key={d.id}>
                        <div className="item fadeIn">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img className="slideIn" src={d.icon} alt="icon" />
                                    </div>
                                    <h2 className="slideIn">{d.title}</h2>
                                    <p className="slideIn">{d.desc}</p>
                                    <div className="links">
                                        <a href={d.demo} target="_blank" rel="noreferrer">Demo</a>
                                        <a href={d.code} target="_blank" rel="noreferrer">Code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="right fade">
                                <img src={d.img} alt={d.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src={downArrow}
                className="arrow left"
                alt="arrow left"
                onClick={() => handleClick("left")} />
            <img src={downArrow}
                className="arrow right"
                alt="arrow right"
                onClick={() => handleClick()} />
        </div>
    )
}
export default Portfolio;