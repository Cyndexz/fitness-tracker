import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import {Provider} from 'react-redux';
import store from './app/store'

ReactDOM.render(
    <Provider store={store}>
=======
import { Provider } from 'react-redux';
import store from './app/store'

ReactDOM.render(
    <Provider store={ store }>
>>>>>>> home_branch
        <App/>
    </Provider>, document.getElementById('root')
);