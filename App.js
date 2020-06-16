import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from '@utils/Reducer';
import Navigator from '@abcd/mainNavigator';

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Navigator/>
      </Provider>
    ); 
  }
}
