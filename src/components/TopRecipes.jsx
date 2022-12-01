import React from "react";
import RecipeTile from "./RecipeTile";

import mockHomeData from '../mock/Home_Recipes';

import '../assets/styles/TopRecipes.scss';

let data    = mockHomeData && mockHomeData.data,
    results = data && data.results,
    topRecipes = results.slice(0, 5);

const TopRecipes = () => {
    return(
        <div className="top__container">
            <div className="top__recipes">
                {topRecipes && topRecipes.map((item) => {
                    let {title, id, image, stars} = item
                    return(
                        <RecipeTile title={title} key={id} image={image} stars={stars} width={100/5}/>
                    )
                })}
            </div>
        </div>
    )
}

export default TopRecipes;