import React, { useState } from 'react'
import { createApi } from 'unsplash-js'
import axios from "axios";
import ImageGrid from './ImageGrid'

const IMAGE_NUMBER = 10

const SearchImage = props => {
    const [images, setImages] = useState(undefined)
    const [currentCityImgUrl, setCurrentCityImgUrl] = useState(undefined);

    const unsplash = createApi({
        accessKey: 'VleyzCT_-kQShHR-NsTdEe8mSpV7BUJL0uCG4FpHn6g',
    });

    const handleOnChange = e =>
        props.setSearchValue(e.target.value)

    const handleSubmit = async _ => {
        unsplash.search.getPhotos({ query: props.searchValue }).then(result => {
            const urls = []
            for (let i = 0; i < IMAGE_NUMBER; ++i) {
                urls.push(result.response.results[i].urls.small)
            }
            const data = { city: props.searchValue, urls }
            setImages(data)
            props.setSearchValue('')
        })
        // TODO why not updating
        await axios.get('http://localhost:8080/api/city/city_path/'+ props.searchValue)
            .then(response => {setCurrentCityImgUrl(response.data);console.log(response)})
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <div>Image actuelle</div>
                <img src={currentCityImgUrl} alt=""/>
            </div>
            <input
                type="text"
                name="searchValue"
                className="input"
                placeholder="Try a city name"
                value={props.searchValue}
                onChange={handleOnChange}
            />
            <button className="button" onClick={handleSubmit}>
                Search
            </button>
            {images && <ImageGrid images={images} />}
        </>
    )
}

export default SearchImage