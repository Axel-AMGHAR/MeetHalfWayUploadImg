import React, { useState } from 'react'
import { createApi } from 'unsplash-js'
import axios from "axios";
import ImageGrid from './ImageGrid'

const IMAGE_NUMBER = 10

const SearchImage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [images, setImages] = useState(undefined)
    const [currentCityImgUrl, setCurrentCityImgUrl] = useState(undefined);

    const unsplash = createApi({
        accessKey: 'VleyzCT_-kQShHR-NsTdEe8mSpV7BUJL0uCG4FpHn6g',
    });

    const handleOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = () => {
        unsplash.search.getPhotos({ query: searchValue }).then(result => {
            const urls = []
            for (let i = 0; i < IMAGE_NUMBER; ++i) {
                urls.push(result.response.results[i].urls.small)
            }
            const data = { city: searchValue, urls }
            setImages(data)
            setSearchValue('')
        })

        axios.get('http://localhost:8080/api/city/city_path/'+ searchValue)
            .then(response => setCurrentCityImgUrl(response.data))
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
                value={searchValue}
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