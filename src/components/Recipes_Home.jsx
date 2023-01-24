import React, {Fragment, useState} from "react";
import RecipeTile from "./RecipeTile";
import Pagination from "./Pagination";

import mockHomeData from '../mock/Home_Recipes';

import '../assets/styles/RecipesHome.scss';

let data    = mockHomeData && mockHomeData.data,
    resultsAPI = data && data.results;

const HomeRecipes = () => {
    const [currentRecipes, setRecipes] = useState({
        currentPageRecipes:[]
    });

    function onChangePageMine(pageOfItems) {
        // update state with new page of items
        setRecipes({ currentPageRecipes: pageOfItems });
    }

    return(
        <Fragment>
            <div className="homeRecipes__container">
                <div className="homeRecipes__recipes">
                {currentRecipes.currentPageRecipes && currentRecipes.currentPageRecipes.map((item) => {
                    let {title, id, image, stars} = item
                    return(
                        <RecipeTile title={title} key={id} image={image} width={100/4} stars={stars}/>
                        )
                    })}
                </div>
            </div>
            <Pagination items={resultsAPI} onChangePage={onChangePageMine}  initialPage={1} itemsPerPage={8}/>
        </Fragment>
    )
}

export default HomeRecipes;