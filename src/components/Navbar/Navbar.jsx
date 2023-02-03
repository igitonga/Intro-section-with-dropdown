import React from "react";
import Logo from "../../images/logo.svg"

const Navbar = () => {
    return(
        <div className="nav-main">
            <img src={Logo} alt="" />
            <ul>
                <li>Feature</li>
                <li>Company</li>
                <li>Carrers</li>
                <li>About</li>
            </ul>
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Navbar;