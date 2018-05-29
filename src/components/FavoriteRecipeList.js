import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends Component {
  render() {
    <div>
      <h4>Favourite Recipes:</h4>
      {
        this.props.favoriteRecipes.map((recipe, i) => {
          return (
            <RecipeItem
            key={i}
            recipe={recipe}
            />
          )
        })
      }
    </div>
  }
}

function mapStateToProps(state) {
  return {
    favoriteRecipes: state.favoriteRecipes
  }
}

export default connect(mapStateToProps, null)(FavouriteRecipeList)
