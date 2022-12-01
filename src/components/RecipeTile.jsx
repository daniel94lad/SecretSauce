import React from "react";
import Stars from "./Stars";

import '../assets/styles/RecipeTile.scss';

const RecipeTile = ({title, image, width, stars = 0}) => {
    let tileWidth = width || 100;

    return(
        <div style={{width:`${tileWidth}%`}} className="recipeTile__container">
            <div className="recipeTile__border">
                <button className="recipeTile__button">
                    <div className="recipeTile__image" style={{backgroundImage: "url(" + image + ")"}}>
                    </div>
                    <div className="recipeTile__details">
                        <div className="recipeTile__details_title">
                            {title}
                        </div>
                        <div className="recipeTile__details_stars">
                            <Stars  numberOfStars={stars}/>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default RecipeTile;