import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import FavoriteRecipeList from './FavoriteRecipeList';
import '../styles/index.css';

class App extends Component {
  render() {
    return(
      <div>
        <h1>Recipe Finder</h1>
        <SearchRecipes />
        <RecipeList />
        <FavoriteRecipeList />
      </div>
    );
  }
}

export default App;
