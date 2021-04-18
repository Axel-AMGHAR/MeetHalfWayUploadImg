import React, { useState, useEffect } from 'react'
import { createApi } from 'unsplash-js'
import axios from "axios";
import ImageGrid from './ImageGrid'

const IMAGE_NUMBER = 10

const  SearchImage = props => {
    const [images, setImages] = useState(undefined)
    const [currentCityImgUrl, setCurrentCityImgUrl] = useState(undefined);

    const unsplash = createApi({
        accessKey: 'VleyzCT_-kQShHR-NsTdEe8mSpV7BUJL0uCG4FpHn6g',
    });

    useEffect( async () => {
        unsplash.search.getPhotos({ query: props.cityName }).then(result => {
            const urls = []
            for (let i = 0; i < IMAGE_NUMBER; ++i) {
                urls.push(result.response.results[i].urls.small)
            }
            const data = { city: props.cityName, urls }
            setImages(data)
        })
        await axios.get('http://localhost:8080/api/city/city_path/'+ props.cityName)
            .then(response => {
                console.log(response)
                setCurrentCityImgUrl(response.data)
            })
            .catch(err => console.log(err))
        console.log(currentCityImgUrl)
    }, []);

    return (
        <>
            <div> L'image chosie <i className=" text-yellow-400 fas fa-star"></i></div>
            <div className="flex justify-between">
                <div className="m-2 p-1 border-4 border-yellow-400 rounded-md">
                    <div className="text-center my-2 font-bold">Image WikiData</div>
                    <img src={currentCityImgUrl} alt=""/>
                </div>
                <div className="m-2 p-1 border-4 border-blue-500 rounded-md">
                    <div className="text-center my-2 font-bold">Image Unsplash</div>
                    <img src={currentCityImgUrl} alt=""/>
                </div>
                <div className="m-2 p-1 border-4 border-blue-500 rounded-md">
                    <div className="text-center my-2 font-bold">Image locale</div>
                    <img src={currentCityImgUrl} alt=""/>
                </div>
            </div>
            <div>
                <div className="text-blue-500 text-2xl text-center font-bold m-4"><i className="fab fa-unsplash"></i> Changer l'image unspash</div>
                <div>
                    { images && <ImageGrid wikicode={props.wikicode} images={images} />}
                </div>
            </div>
        </>
    )
}

export default SearchImage