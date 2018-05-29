import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends Component {
  render() {
    <div>
      <h4>Favourite Recipes:</h4>

    </div>
  }
}

function mapStateToProps(state) {
  return {
    favoriteRecipes: state.favoriteRecipes
  }
}

export default connect(mapStateToProps, null)(FavouriteRecipeList)
