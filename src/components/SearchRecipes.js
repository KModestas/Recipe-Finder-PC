import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: '',
      dish: ''
    };
  }

  // seen as this is the only component that will utilise this data, adding a local state is fine

  search() {
    const { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;


    fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        this.props.setRecipes(json.results);
      });
  }

  render() {
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={e => this.setState({ingredients: e.target.value})}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="adobo"
            onChange={e => this.setState({dish: e.target.value})}
          />
        </FormGroup>
        {' '}
        <Button onClick={()=> this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null,{ setRecipes })(SearchRecipes);
