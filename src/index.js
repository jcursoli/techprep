import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

import App from './components/app';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import LandingPage from './components/landingPage';
import Profile from './components/profile';
import Welcome from './components/welcome';
import Practice from './components/practice';
import { AUTH_USER } from './actions/actionTypes';
import RequireAuth from './components/auth/require_auth';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Questions from './components/questions';
import Algorithms from './components/algorithms';
import AlgorithmList from './components/algorithmList';

import reducers from './reducers';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f, autoRehydrate());
persistStore(store);

export {
  store
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage} />
          <Route path="login" component={Login} />
          <Route path="signup" component={Signup} />
          <Route path="welcome" component={Welcome} />
          <Route path="profile" component={Profile} />
          <Route path='practice' component={Practice} />
          <Route path="questions" component={Questions} />
          <Route path="algorithms" component={AlgorithmList} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));