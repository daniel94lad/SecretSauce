import React from 'react';

import '../assets/styles/QuickMenuButton.scss';

const QuickMenuButton = ({title, icon}) => {

    let buttonTitle = title ? title : 'unknown',
        altTitle    = `${buttonTitle} icon`;

    return(
        <button className='quickMenuButton__background'>
            <div className='quickMenuButton__container'>
                <div className='quickMenuButton__icon'>
                    {icon && <img width={'60px'} src={icon} alt={altTitle}/>}
                </div>
                <div className='quickMenuButton__title'>
                    {buttonTitle}
                </div>
            </div>
        </button>
    )
}

export default QuickMenuButton;