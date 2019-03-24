import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss'
import rootReducer from './components/reducers/rootReducer.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'))
