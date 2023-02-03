import React from "react";
import Hero from "../../images/image-hero-desktop.png"
import Databiz from "../../images/client-databiz.svg"
import Audiophile from "../../images/client-audiophile.svg"
import Meet from "../../images/client-meet.svg"
import Maker from "../../images/client-maker.svg"
import "./landing.scss"

const Landing = () => {
    return(
        <div className="content">
            <div className="left-content">
                <p className="headline">Make <br /> remote work</p>
                
                <p className="headline-text">Get your team in sync, no matter your location. <br />
                   Streamline processes,create team rituals and <br />
                   watch productivity soar.
                </p>

                <button>Learn more</button>

                <div className="clients"> 
                    <img src={Databiz} alt="" />
                    <img src={Audiophile} alt="" />
                    <img src={Meet} alt="" />
                    <img src={Maker} alt="" />
                </div>
            </div>
            <div className="right-image">
                <img className="hero" src={Hero} alt="Hero"/>
            </div>
        </div>
    )
}

export default Landing;