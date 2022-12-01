import React from "react";
import { constants } from '../utils/Constants';
import logo from "../assets/static/Logo_V01.ico";
import Mediabutton from "./MediaButton";

import '../assets/styles/Footer.scss';

let footerConstants = constants && constants.footer,
    mediaData       = footerConstants && footerConstants.media;

const Footer = () => {
    return(
        <footer className="footer__container">
            <div className="footer__brand">
                <div className="footer__brand_container">
                    <img className="footer__brand_logo" src={logo} alt="secret sauce logo" />
                </div>
            </div>
            <div className="footer__copyright">
                {'Secret Sauce© 2022'}
            </div>
            <div className="footer__media">
                {mediaData && mediaData.map((media, idx) =>{
                    let {name, icon, link} = media;
                    return(
                        <Mediabutton key={idx} name={name} icon={icon} link={link}/>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer;