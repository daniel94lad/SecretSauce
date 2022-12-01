import React from 'react';
import { constants } from '../utils/Constants';
import QuickMenuButton from './QuickMenuButton';

import '../assets/styles/QuickMenu.scss';

let menuConstants     = constants && constants.quickMenu,
    menuButtonsData   = menuConstants && menuConstants.buttons;

const QuickMenu = () => {

    return(
        <div className='quickMenu__container'>
            {menuButtonsData && menuButtonsData.map((button) => {
                let {title, image, idx} = button;
                return(
                    <QuickMenuButton key={`${title}-${idx}`} title={title} icon={image}/>
                )
            })}
        </div>
    )
}

export default QuickMenu;