import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

// import { SizeContext } from '../../App';

import { fadeIn } from "../../animations/fadeIn";
import "./works.scss";

const worksArr = [
    {
        id: 1,
        name: "Weather App",
        href: "https://github.com/leralys/weatherApp",
        img: "/works/weatherApp.png",
    }, {
        id: 2,
        name: "React Mini Memory Game",
        href: "https://github.com/leralys/miniMemoryGameReact",
        img: "/works/superHeroesMemoryGame.png"

    }, {
        id: 3,
        name: "E-Commerce Website",
        href: "https://github.com/leralys/hackathon2",
        img: "/works/eCommerce.png"
    }, {
        id: 4,
        name: "Star Wars Search App",
        href: "https://github.com/leralys/DI_Bootcamp/tree/main/MiniProject_StarWarsWebApp",
        demo: "https://codepen.io/leralys/full/vYeVjPW",
        img: "/works/starWarsSearchApp.png"
    }, {
        id: 5,
        name: "JavaScript Calculator",
        href: "https://github.com/leralys/calculator",
        demo: "https://codepen.io/leralys/full/jOBrNbL",
        img: "/works/javaScriptCalculator.png"
    },
    {
        id: 6,
        name: "ToDo App",
        href: "https://github.com/leralys/DI_Bootcamp/tree/main/MiniProject_SpecialToDoList",
        img: "/works/todoApp.png"
    }
]


const Works = ({ menuOpen }) => {
    const worksRef = useRef();
    const { inViewport } = useInViewport(worksRef);
    // const isComputer = useContext(SizeContext);

    if (inViewport && !menuOpen) {
        fadeIn(".fadeIn");
    }
    return (
        <div className="works" id="works">
            <h1 className="fadeIn">More of my works</h1>
            <div className="container fadeIn" ref={worksRef}>
                {worksArr.map(work => (
                    <div className="item" key={work.id}>
                        <img src={work.img} alt={work.name} />
                        <div>
                            <a href={work.href} target="_blank" rel="noreferrer">
                                {work.name}
                            </a>
                            {work.demo &&
                                <a href={work.demo} className="demo" target="_blank" rel="noreferrer">
                                    Demo
                                </a>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Works;
