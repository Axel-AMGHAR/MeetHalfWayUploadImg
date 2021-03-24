import React, {useState} from 'react'
import axios from 'axios'

export default class DatabaseLog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            host: null,
            password: null,
            dialect: null,
            database: null,
        };

        this.sendCredentials = this.sendCredentials.bind(this);
    }

    sendCredentials = _ => {

        if(!this.state.username && !this.state.host && !this.state.password && !this.state.dialect && !this.state.database)
            return;

        axios.post('http://localhost:8080/api/login',{
            username: this.state.username,
            host: this.state.host,
            password: this.state.password,
            dialect: this.state.dialect,
            database: this.state.database,
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    };
    render() {
        return (

            <div>
                <h2>Se connecter à la BDD</h2>
                <div>
                    <label htmlFor="host">Hote</label>
                    <input id="host" type="text" value={this.state.host} onChange={e => this.setState({host: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input id="password" type="text" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="dialect">Dialect</label>
                    <input id="dialect" type="text" value={this.state.dialect} onChange={e => this.setState({dialect: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="database">Nom BDD</label>
                    <input id="database" type="text" value={this.state.database} onChange={e => this.setState({database: e.target.value})}/>
                </div>
                <div>
                    <button onClick={this.sendCredentials}>Se connecter</button>
                </div>
            </div>
        )
    }
}