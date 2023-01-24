import axios from 'axios';

axios.defaults.headers['X-API-KEY'] = '4011b2e62cb14ec490888e8b4e1c6918';

export const getAllRecipes = (limit = 10) => {
    return axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?number=${limit}`)
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
}