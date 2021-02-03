import React from 'react'
import Block from 'react-blocks'
import axios from 'axios'


const ImageGrid = ({ images }) => {
    const handleOnclick = (e) => {

        axios.post('http://localhost:8080/api/city_update_unsplash_path', {
            unsplash_url: e.target.src,
            code: "Q191396"
        } ).then(data => console.log(data) )
            .catch(err => console.log(err))
    }

    return (
        <Block>
            {images.urls.map(item => {
                return (
                    <div onClick={handleOnclick}>
                        <img src={item} alt={item} />
                    </div>
                )
            })}
        </Block>
    )
}

export default ImageGrid