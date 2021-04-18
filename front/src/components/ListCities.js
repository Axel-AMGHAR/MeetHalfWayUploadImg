import React, { useState, useEffect } from 'react';
import axios from "axios";

const ListCities = () => {
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState([]);
    const [citiesSave, setCitiesSave] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8080/api/city").then(resp => {
            setCities(resp.data)
            setCitiesSave(resp.data);
        })
    },[])

    const show_img = async e => {
        let res = await axios.get("http://localhost:8080/api/city/city_path/" + e.target.value)
        this.setState({ img: <img src={res.data} alt=""/> })
    }

    const filterCity = (e) => {
        setCity(e.target.value)
        console.log(city.length)
        city.length > 2
            ? setCities(citiesSave.filter(citySave => citySave.name.toLowerCase().includes(city.toLowerCase())))
            : setCities(citiesSave)
    };

    return (
        <div>
            <div className='p-4 flex flex-col items-center'>
                <label className='font-bold text-blue-500 text-2xl '>Rechercher une ville</label>
                <input placeholder='nom de la ville' className='px-2 py-1 border-2 rounded-lg w-64 outline-none focus:border-blue-700' type="text" value={city} onChange={filterCity}/>
            </div>
            <table className='m-auto'>
                <thead className=''>
                <tr>
                    <th className='p-2 border-2'>Nom de la ville</th>
                    <th className='p-2 border-2'>Image (si déjà chargée)</th>
                    <th className='p-2 border-2'>edit</th>
                </tr>
                </thead>
                <tbody>
                {cities.map(city => {
                    let path = null;
                    if(city.city_path !== null){
                        if(city.city_path.default === 'img_base64' ){
                            let buf = new Buffer(city.city_path.img_base64, 'base64')
                            path = buf.toString('ascii');
                        } else{
                           console.log( city.city_path[city.city_path.default])
                           console.log(city.city_path.default)
                            path = city.city_path[city.city_path.default];
                        }

                    }
                    console.log(path)

                    return (<tr>
                        <td className='p-2 border-2 font-bold text-center'>{city.name}</td>
                        <td className='p-6 border-b-2 flex justify-center'><img className='max-h-32' src={path} alt=""/></td>
                        <td className='p-2 border-2 text-center'>
                            <a href={'/cities/detail/'+ city.tags.wikidata + '/' + city.name}>
                                <i className='fa fa-edit fa-fw'/>
                            </a>
                        </td>
                    </tr>)
                })}

                </tbody>
            </table>
            {/*                <select name="cities" onChange={show_img}>
                    {this.cities.map(city => (<option value={city}>{city}</option>))}
                </select>
                <div>
                    {img}
                </div>*/}
        </div>
    );
}

export default ListCities;