import { useState } from "react";
import "./portfolio.scss"
import downArrow from '../../assets/images/downArrow.png';

const Portfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "/carousel/dog.png",
            title: "Check-in app for dog owners",
            desc: "React, Redux, Node.js server with Express deployed on Heroku, PostgreSQL, Sequelize ORM,JWT authentication, Mapbox GL JS map, Supercluster library.",
            img: "/carousel/bestBuddiesCarousel.png",
            code: "https://github.com/leralys/bestBuddiesApp",
            demo: "https://bestbuddies.netlify.app/",
        }, {
            id: "2",
            icon: "/carousel/movie.png",
            title: "Movie Search App",
            desc: "React, Redux, OMDb API",
            img: "/carousel/movieSearchApp.png",
            code: "https://github.com/leralys/DI_Bootcamp/tree/main/MiniProject_MovieSearchApp/movie-search-app",
            demo: "https://findmovieapp.netlify.app/"
        }, {
            id: "3",
            icon: "/carousel/game.png",
            title: "JavaScript Memory Game",
            desc: "Javascript, HTML5, CSS3. Developers Institute Hackathon winner",
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
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container" key={d.id}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="icon" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <div className="links">
                                        <a href={d.demo} target="_blank" rel="noreferrer">Demo</a>
                                        <a href={d.code} target="_blank" rel="noreferrer">Code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
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