import React from 'react';
import { constants } from '../utils/Constants';
import logo from '../assets/static/Logo_V01.ico';
import QuickMenu from './QuickMenu';

import '../assets/styles/HeroHome.scss';

const HeroHome = () => {

    let HomeConstants     = constants && constants.home,
        heroQuote         = HomeConstants && HomeConstants.quote;
    
    return(
        <div className='heroHome__container'>
            <div className='heroHome__brand'>
                <div className='heroHome__brand_background'>
                    <img width={'100px'} className="heroHome__brand_img" src={logo} alt="secret sauce logo" />
                </div>
            </div>
            <div className='heroHome__divisor' />
            <div className='heroHome__quote'>
                <p className='heroHome__quote_paragraph'>{heroQuote}</p>
            </div>
            <div className='heroHome__quickMenu'>
                <QuickMenu/>
            </div>
        </div>
    )
}

export default HeroHome;