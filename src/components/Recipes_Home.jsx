import React from "react";
import RecipeTile from "./RecipeTile";

import mockHomeData from '../mock/Home_Recipes';

import '../assets/styles/RecipesHome.scss';

let data    = mockHomeData && mockHomeData.data,
    results = data && data.results;

const HomeRecipes = () => {
    return(
        <div className="homeRecipes__container">
            <div className="homeRecipes__recipes">
            {results && results.map((item) => {
                let {title, id, image, stars} = item
                return(
                    <RecipeTile title={title} key={id} image={image} width={100/4} stars={stars}/>
                )
            })}
            </div>
        </div>
    )
}

export default HomeRecipes;