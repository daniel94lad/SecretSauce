import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/static/Logo_V01.ico';

import '../assets/styles/Navbar.scss';

const Navbar = () => {

    return(
        <nav className="navbar__container">
            <div className="navbar__brand">
                <div className="navbar__brand_logo">
                    <Link to='/' className="navbar__brand_container">
                        <img width={'30px'} className="navbar__brand_logo" src={logo} alt="secret sauce logo" />
                    </Link>
                </div>
                <div className="navbar__brand_name">
                    <b>| Secret Sauce |</b>
                </div>
            </div>
            <div className="navbar__searchBar">
                <div className="navbar__searchBar_container">

                <input className="navbar__searchBar_container-input" type='text' placeholder='Search a recipe'/>
                <i className="navbar__searchBar_container-icon"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;