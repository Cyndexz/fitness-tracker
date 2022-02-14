import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducers } from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Apistore from './app/store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
            <Provider store={ store }>
                <App/>
            </Provider>
    </BrowserRouter>, document.getElementById('root')
);