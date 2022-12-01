import React from 'react';

import '../assets/styles/Stars.scss';

const Stars = ({numberOfStars = 0, maxQuantity = 5}) => {
    let starsLeft =  maxQuantity - numberOfStars || 0;
    
    return(
        <ul className='stars__container'>
            {Array.from(Array(numberOfStars), (value, idx) => {
                return <li key={idx} className='stars__star'>{value}</li>
            })}
            {Array.from(Array(starsLeft), (value, idx) => {
                return <li key={idx} className='stars__star left'>{value}</li>
            })}
        </ul>
    )
}

export default Stars;