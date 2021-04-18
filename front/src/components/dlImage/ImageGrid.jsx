import React from 'react'
import Block from 'react-blocks'
import axios from 'axios'

const ImageGrid = ({ images, wikicode }) => {
    console.log(images)
    const handleOnclick = (e) => {

        axios.post('http://localhost:8080/api/city/city_update_unsplash_path', {
            unsplash_url: e.target.src,
            code: wikicode
        } ).then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <ul className="flex wrap">
            {images.urls.map(item => {
                return (
                    <li className="flex-grow" style={{height: '20vh'}}>
                        <img className="max-h-full max-w-full align-bottom object-cover"  onClick={handleOnclick} src={item} alt={item} />
                    </li>
                )
            })}
            <li style={{ 'flex-grow': '10'}}></li>
        </ul>

    )
}

export default ImageGrid