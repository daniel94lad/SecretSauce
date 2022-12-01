import React from 'react';

import '../assets/styles/MediaButton.scss'

const Mediabutton = ({name, icon, link}) => {
    let altTitle    = `${name} icon`;

    return(
        <a href={link} className='mediaButton__container'>
            {icon && <img width={'30px'} src={icon} alt={altTitle}/>}
        </a>
    )
}

export default Mediabutton;