import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        )
    }
}

export default App;