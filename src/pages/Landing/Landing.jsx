import React from "react";
import Hero from "../../images/image-hero-desktop.png"
import Databiz from "../../images/client-databiz.svg"
import Audiophile from "../../images/client-audiophile.svg"
import Meet from "../../images/client-meet.svg"
import Maker from "../../images/client-maker.svg"

const Landing = () => {
    return(
        <div>
            <div className="left-content">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. <br></br>
                   Streamline processes,create team rituals and <br></br>
                   watch productivity soar.
                </p>
                <button>Learn more</button>
                <div>
                    <img src={Databiz} alt="" />
                    <img src={Audiophile} alt="" />
                    <img src={Meet} alt="" />
                    <img src={Maker} alt="" />
                </div>
            </div>
            <div className="right-image">
                <img src={Hero} alt="Hero"/>
            </div>
        </div>
    )
}

export default Landing;