import "./works.scss";
import starWarsSearchApp from "../../assets/images/projects/starWarsSearchApp.png";
import todoApp from "../../assets/images/projects/todoApp.png";
import weatherApp from "../../assets/images/projects/weatherApp.png";
import findThePairGame from "../../assets/images/projects/findThePairGame.png";
import randomQuoteGenerator from "../../assets/images/projects/randomQuoteGenerator.png";
import eCommerceWebSite from "../../assets/images/projects/eCommerceWebSite.png";

const Works = () => {
    const anchors = [{
        starWars: "https://github.com/leralys/DI_Bootcamp/tree/main/MiniProject_StarWarsWebApp"
    },
    {
        todo: "https://github.com/leralys/DI_Bootcamp/tree/main/MiniProject_SpecialToDoList"
    },
    {
        ecommerce: "https://github.com/leralys/hackathon2"
    }, {
        weather: "https://github.com/leralys/DI_Bootcamp/tree/main/HeroloAssignment_WeatherApp/weather-app/src"
    }, {
        memoryGamePairs: "https://github.com/leralys/mind_game"
    }, {
        quotes: "https://github.com/leralys/DI_Bootcamp/tree/main/Week8/Week8Day5/MiniProject-RandomQuoteGenerator/quote-generator/src"
    }



    ]
    return (
        <div className="works" id="works">
            <h1>More of my works</h1>
            <div className="container">
                <div className="item">
                    <img src={starWarsSearchApp} alt="Star Wars Search App" />
                    <h3>
                        <a href="https://github.com/leralys/DI_Bootcamp/tree/main/MiniProject_StarWarsWebApp" target="_blank" rel="noreferrer">
                            Star Wars Search App</a>
                    </h3>
                </div>
                <div className="item">
                    <img src={todoApp} alt="Todo App" />
                    <h3>
                        <a href="https://github.com/leralys/DI_Bootcamp/tree/main/MiniProject_SpecialToDoList" target="_blank" rel="noreferrer">
                            Todo App
                        </a>
                    </h3>
                </div>
                <div className="item" id="containsTwo">
                    <img src={eCommerceWebSite} alt="eCommerce Website" />
                    <h3>
                        <a href="https://github.com/leralys/hackathon2" target="_blank" rel="noreferrer">
                            eCommerce Website</a>
                    </h3>
                </div>
                <div className="item">
                    <img src={weatherApp} alt="Weather App" />
                    <h3>
                        <a href="https://github.com/leralys/DI_Bootcamp/tree/main/HeroloAssignment_WeatherApp/weather-app/src" target="_blank" rel="noreferrer">
                            Weather App
                        </a>
                    </h3>
                </div>
                <div className="item">
                    <img src={findThePairGame} alt="Javascript Memory Game" />
                    <h3>
                        <a href="https://github.com/leralys/mind_game" target="_blank" rel="noreferrer">
                            Javascript Memory Game</a>
                    </h3>
                </div>
                <div className="item">
                    <img src={randomQuoteGenerator} alt="Random Quotes Generator" />
                    <h3>
                        <a href="https://github.com/leralys/DI_Bootcamp/tree/main/Week8/Week8Day5/MiniProject-RandomQuoteGenerator/quote-generator/src" target="_blank" rel="noreferrer">
                            Quotes Generator
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default Works;
