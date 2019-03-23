import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss'
import * as contentful from 'contentful'
import cartReducer from './components/reducers/cartReducer.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var client = contentful.createClient({
  space: 'ptcc2nvzky4i',
  accessToken: '7564cf9303763e85ef9d681f43a329a118f5cb9458ba9448da1da1d87805f6a8' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
