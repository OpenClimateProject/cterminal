import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import News from './News';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route path="/news" component={News} />
      </div>
    </Router>
  )
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();