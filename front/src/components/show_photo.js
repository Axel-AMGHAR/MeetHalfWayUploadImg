import React, { Component } from 'react';
import axios from "axios";

class ShowPhoto extends Component {

    constructor(props){
        super(props);
        this.cities = ['Q191396', 'Q6625', 'Q47465','Q181955', 'Q181955', 'Q181269', 'Q193183', 'Q41604', 'Q38380'];
        this.state =  {
            img: null
        }
    }

    show_img = async e => {
        let res = await axios.get("http://localhost:8080/api/city_path/" + e.target.value)
        this.setState({ img: <img src={res.data} alt=""/> })
    }

    render() {
        return (
            <div>

                <select name="cities" onChange={this.show_img}>
                    {this.cities.map(city => (<option value={city}>{city}</option>))}
                </select>
                <div>
                    {this.state.img}
                </div>
            </div>
        );
    }
}

export default ShowPhoto;