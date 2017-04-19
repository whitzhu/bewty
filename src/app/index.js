import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './components/App';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NewEntry from './components/newEntry/NewEntry';
import EntryList from './containers/entry-list/EntryList';
import EntryView from './containers/entry-view/EntryView';
import Results from './components/results/Results';
import CallSchedule from './components/callSchedule/CallSchedule';

import reducers from './reducers';

import './styles/variables.scss';
import './styles/global.scss';
import './styles/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/new-entry" component={NewEntry} />
        <Route path="/entries" component={EntryList} />
        <Route path="/entry/:id" component={EntryView} />
        <Route path="/results" component={Results} />
        <Route path="/call-schedule" component={CallSchedule} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('app'));
