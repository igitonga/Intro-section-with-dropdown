import React,{useState} from "react";
import Logo from "../../images/logo.svg"
import "./navbar.scss"
import ArrowDown from "../../images/icon-arrow-down.svg"
import ArrowUp from "../../images/icon-arrow-up.svg"
import CompanyDropdown from "../Dropdowns/CompanyDropdown/CompanyDropdown";
import FeatureDropdown from "../Dropdowns/FeatureDropdown.jsx/FeatureDropdown";

const Navbar = () => {
    const [companyState, setCompanyState] = useState(false)
    const [featureState, setFeatureState] = useState(false)

    let arrowCompanyDirection =  companyState ? ArrowUp : ArrowDown
    let arrowFeatureDirection =  featureState ? ArrowUp : ArrowDown

    function onClickingCompany(){
        setCompanyState(!companyState);
    }

    function onClickingFeature(){
        setFeatureState(!featureState);
    }

    return(
        <div className="nav-main">
            <div className="nav-links">
                <img className="logo" src={Logo} alt="" />
                <ul>
                    <li onClick={onClickingFeature}>Feature <img src={arrowFeatureDirection} alt="" /></li>
                    <li onClick={onClickingCompany}>Company <img src={arrowCompanyDirection} alt="" /></li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="btn-wrapper">
                <button className="btnLogin">Login</button>
                <button className="btnRegister">Register</button>
            </div>
            {companyState && <CompanyDropdown />}
            {featureState && <FeatureDropdown />}
        </div>
    )
}

export default Navbar;