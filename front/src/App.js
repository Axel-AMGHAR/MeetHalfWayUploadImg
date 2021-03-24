import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowPhoto from './components/show_photo';
import dlImages from './components/dlImages';
import DatabaseLog from './components/DatabaseLog';
import axios from "axios";

class App extends Component {

/*    constructor(props) {
        super(props)
        this.state = {
            is_connected: false
        }

    }*/

/*
    axios.get('http://localhost:8080/api/is_authenticated').then(res => {
    console.log(res)
}).catch(err => console.log(err))*/

  render() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/admin'} className="nav-link">Choisir les images</Link></li>
                    <li><Link to={'/show_photo'} className="nav-link">Voir les images</Link></li>
                    <li><Link to={'/log_database'} className="nav-link">Se connecter à la base</Link></li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/admin' component={dlImages}/>
                <Route path='/show_photo' component={ShowPhoto}/>
                <Route path='/log_database' component={DatabaseLog}/>
            </Switch>

        </div>
    );
  }
}

export default App;
