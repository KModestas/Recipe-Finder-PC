import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class FavoriteRecipeList extends Component {
  render() {
    <div>
      <h4><Link to='home'>Home</Link></h4>
      <h4>Favourite Recipes:</h4>
      {
        this.props.favoriteRecipes.map((recipe, i) => {
          return (
            <RecipeItem
            key={i}
            recipe={recipe}
            favoriteButton={false}
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
