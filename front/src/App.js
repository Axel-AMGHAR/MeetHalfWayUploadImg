import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListCities from './components/ListCities';
import DetailCity from './components/DetailCity';
import DatabaseLog from './components/DatabaseLog';
import { Helmet } from 'react-helmet'

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
        <div className="App container m-auto">
            <Helmet>
                <script src="https://kit.fontawesome.com/9ce41bd472.js" crossOrigin="anonymous"></script>
            </Helmet>

            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
            <nav className="">
                <ul className="flex justify-around">
                    <li className='p-4'><Link to={'/cities/list'} className="nav-link p-4 hover:underline">Voir la liste des villes <i className='fa-fw fa fa-city'></i></Link></li>
                    <li className='p-4'><Link to={'/log-database'} className="nav-link p-4 hover:underline">Se connecter à la base <i className='fa-fw fa fa-sign-in-alt'></i></Link></li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route path='/cities/list' component={ListCities}/>
                <Route path='/log-database' component={DatabaseLog}/>
                <Route path='/cities/detail/:wiki_code/:city_name' component={DetailCity}/>
            </Switch>

        </div>
    );
  }
}

export default App;
