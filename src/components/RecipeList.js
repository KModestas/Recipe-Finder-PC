import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class RecipeList extends Component {
  render() {
    console.log('this.props', this.props);

    return(
      <div>
      {
        this.props.favouriteRecipes.length > 0 ?
        <h4 className='link'><Link to='favorites'>Favorites</Link></h4>
        :
        <div></div>
      }

        {
          this.props.recipes.map((recipe, i) => {
            return(
              <RecipeItem
              key={i}
              recipe={recipe}
              favoriteButton={true}
              />
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);

// second connect argumment is an action creator but is null if there is no action at this point in time.
