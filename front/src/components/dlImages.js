import React, { Component, useState } from 'react';
import axios from "axios";
import SearchImages from "./dlImage/SearchImages";

const DlImages = () => {

    const [searchValue, setSearchValue] = useState('')

    const GiveImages = (images) => {
        const cl = e => console.log(e);

        var FR= new FileReader();
        FR.addEventListener("load", function(ev) {
            axios.post('http://localhost:8080/api/city/city_update_local_path', {
                base64_img_local: ev.target.result,
                code: 'code_empty'
            } ).then(data => console.log(data) )
                .catch(err => console.log(err))
        });
        FR.readAsDataURL( images[0] );

        for (var i = 0; i < images.length; i++) {
            var file = images[i];
            var imageType = /^image\//;

            if (!imageType.test(file.type)) {
                continue;
            }

            var img = document.createElement("img");
            img.classList.add("obj");
            img.file = file;
            document.getElementById("preview").appendChild(img); // En admettant que "preview" est l'élément div qui contiendra le contenu affiché.

            var reader = new FileReader();
            reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
            reader.readAsDataURL(file);
        }
    }

    return  (
        <div>
            <h1>Search image from Unsplash</h1>
            <SearchImages setSearchValue={setSearchValue} searchValue={searchValue}/>
            <div className="App-header">

                <label>Search image from my files</label>
                <input onChange={(event)=> GiveImages(event.target.files)} type="file" id="id-file"/>
                <div id="preview"></div>

            </div>
        </div>
    )


}
export default DlImages