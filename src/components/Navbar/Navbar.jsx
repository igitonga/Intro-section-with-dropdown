import React from "react";
import Logo from "../../images/logo.svg"
import "./navbar.scss"
const Navbar = () => {
    return(
        <div className="nav-main">
            <div className="nav-links">
                <img className="logo" src={Logo} alt="" />
                <ul>
                    <li>Feature</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="btn-wrapper">
                <button className="btnLogin">Login</button>
                <button className="btnRegister">Register</button>
            </div>
        </div>
    )
}

export default Navbar;