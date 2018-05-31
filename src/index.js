import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './reducers';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

<BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}>
    </Route path='/favorites' component={FavoriteRecipeList} />
  </Switch>
</BrowserRouter>

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
