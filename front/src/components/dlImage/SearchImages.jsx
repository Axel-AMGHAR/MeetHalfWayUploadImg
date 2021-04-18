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
            const urls = [];
            for (let i = 0; i < IMAGE_NUMBER; ++i) {
                if(result.response.results[i] !== undefined)
                    urls.push(result.response.results[i].urls.small)
            }
            const data = { city: props.cityName, urls }
            setImages(data)
        })
        await axios.get('http://localhost:8080/api/city/city_path/'+ props.cityName)
            .then(response => {
                if(response.data !== undefined && response.data.img_base64 !== null){
                    let buf = new Buffer(response.data.img_base64, 'base64')
                    response.data.img_base64 = buf.toString('ascii');
                }
                setCurrentCityImgUrl(response.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <div> L'image chosie <i className=" text-yellow-400 fas fa-star"></i></div>
            { currentCityImgUrl !== undefined
                ?
            <div className="flex justify-between">
                {/* TODO yellow default*/}
                <div className={"m-2 p-1 border-4 rounded-md " + (currentCityImgUrl.default === 'photo_path_wikimedia' ? 'border-yellow-400' : 'border-blue-500')}>
                    <div className="text-center my-2 font-bold">Image WikiData</div>
                    <img className="max-h-64" src={currentCityImgUrl.photo_path_wikimedia ? currentCityImgUrl.photo_path_wikimedia : '/img/page-not-found.png'} alt=""/>
                </div>
                <div className={"m-2 p-1 border-4 rounded-md " + (currentCityImgUrl.default === 'photo_path_unsplash' ? 'border-yellow-400' : 'border-blue-500')}>
                    <div className="text-center my-2 font-bold">Image Unsplash</div>
                    <img className="max-h-64" src={currentCityImgUrl.photo_path_unsplash ? currentCityImgUrl.photo_path_unsplash : '/img/page-not-found.png'} alt=""/>
                </div>
                <div className={"m-2 p-1 border-4 rounded-md " + (currentCityImgUrl.default === 'img_base64' ? 'border-yellow-400' : 'border-blue-500')}>
                    <div className="text-center my-2 font-bold">Image locale</div>
                    <img className="max-h-64" src={currentCityImgUrl.img_base64 ? currentCityImgUrl.img_base64 : '/img/page-not-found.png'} alt=""/>
                </div>
            </div>
                : ''}
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