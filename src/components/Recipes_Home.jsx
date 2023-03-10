import React, {Fragment, useState, useEffect} from "react";
import { connect } from "react-redux";
import RecipeTile from "./RecipeTile";
import Pagination from "./Pagination";

import { getAllRecipes } from "../api";
import { setRecipes as setRecipesActions } from '../actions'

import mockHomeData from '../mock/Home_Recipes';

import '../assets/styles/RecipesHome.scss';

let data    = mockHomeData && mockHomeData.data,
    resultsAPI = data && data.results;

function HomeRecipes({ recipes, setRecipes }){

    useEffect(() => {

        const fetchRecipes = async() => {
          const recipesResponse = await getAllRecipes();
          setRecipes(recipesResponse);
        };
    
        fetchRecipes(); 
      }, [])

    const [currentRecipes, setCurrentRecipes] = useState({
        currentPageRecipes:[]
    });

    function onChangePageMine(pageOfItems) {
        // update state with new page of items
        setCurrentRecipes({ currentPageRecipes: pageOfItems });
    }
    if(recipes.length > 0){
        console.log('Explain', recipes)
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
                    })}´
                {recipes && recipes.map((item) => {
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

const mapStateToProps = (state) => ({
    recipes: state.recipes,
  })
  
const mapDispatchToProps = (dispatch) => ({
setRecipes: (value) => dispatch(setRecipesActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeRecipes);