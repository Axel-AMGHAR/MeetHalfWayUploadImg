import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowPhoto from './components/show_photo';
import dlImages from './components/dlImages';

class App extends Component {

  render() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/admin'} className="nav-link"> dlImages </Link></li>
                    <li><Link to={'/show_photo'} className="nav-link">Show Photo</Link></li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/admin' component={dlImages} />
                <Route path='/show_photo' component={ShowPhoto} />
            </Switch>

        </div>
    );
  }
}

export default App;
