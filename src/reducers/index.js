import { SET_RECIPES } from "../actions/types";

const initialState = {
    recipes: [],
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_RECIPES:
            return { ...state, recipes: action.payload };
        default:
            return state;
    }
}

export default reducer;