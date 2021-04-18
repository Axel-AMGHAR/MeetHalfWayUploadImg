import React from 'react'
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

            <div className="flex justify-center ">
                <div className="mt-2 p-4 border-blue-500 border-4 rounded-md">
                    <h1 className="m-2 text-xl">Se connecter à la BDD <i className="fas fa-database"></i></h1>
                    <div className="m-1 flex flex-col">
                        <label htmlFor="host">Hote</label>
                        <input id="host" type="text" className="px-2 py-1 border-2 border-2 rounded-lg w-64 outline-none focus:border-blue-700" value={this.state.host} onChange={e => this.setState({host: e.target.value})}/>
                    </div>
                    <div className="m-1 flex flex-col">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" className="px-2 py-1 border-2 border-2 rounded-lg w-64 outline-none focus:border-blue-700" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                    </div>
                    <div className="m-1 flex flex-col">
                        <label htmlFor="password">Mot de passe</label>
                        <input id="password" type="text" className="px-2 py-1 border-2 border-2 rounded-lg w-64 outline-none focus:border-blue-700" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                    </div>
                    <div className="m-1 flex flex-col">
                        <label htmlFor="dialect">Dialect</label>
                        <input id="dialect" type="text" className="px-2 py-1 border-2 border-2 rounded-lg w-64 outline-none focus:border-blue-700" value={this.state.dialect} onChange={e => this.setState({dialect: e.target.value})}/>
                    </div>
                    <div className="m-1 flex flex-col">
                        <label htmlFor="database">Nom BDD</label>
                        <input id="database" type="text" className="px-2 py-1 border-2 border-2 rounded-lg w-64 outline-none focus:border-blue-700" value={this.state.database} onChange={e => this.setState({database: e.target.value})}/>
                    </div>
                    <div className="flex justify-center mt-1">
                        <button className="font-bold border-2 hover:bg-blue-100 hover:border-blue-500 border-blue-500 rounded-lg p-4 py-1" onClick={this.sendCredentials}>Se connecter</button>
                    </div>
                </div>
            </div>
        )
    }
}