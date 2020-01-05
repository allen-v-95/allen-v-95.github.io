import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Create from './components/Create';
import Results from './components/Results';
import './scss/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/create/:challengeId" component={Create} />
                <Route path="/results" component={Results} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

