import { SET_RECIPES } from "../actions/types";

const initialState = {
    recipes: [],
}

export const recipesReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_RECIPES:
            return { ...state, recipes: action.payload };
        default:
            return state;
    }
}
