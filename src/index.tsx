import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './App';
import './assets/css/index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
// import Store from './store/Store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </BrowserRouter>
            </App>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
