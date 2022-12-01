import React from "react";
import Hero from '../components/Hero_Home';
import TopRecipes from "../components/TopRecipes";
import HomeRecipes from "../components/Recipes_Home";

import '../assets/styles/Home.scss';

const Home = () => {
  return(
    <div className="Home__container">
      <Hero />
      <TopRecipes/>
      <HomeRecipes/>
    </div>
  )
}

export default Home;