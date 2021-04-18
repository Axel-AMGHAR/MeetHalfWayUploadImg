import axios from "axios";
import SearchImages from "./dlImage/SearchImages";
import { useParams } from 'react-router-dom'
const cl = e => console.log(e);

const DetailCity = ()  => {
    let { wiki_code, city_name } = useParams();

    const GiveImages = (images) => {

        var FR= new FileReader();
        FR.addEventListener("load", function(ev) {
            cl('ev.target.result')
            cl(ev.target.result)
            axios.post('http://localhost:8080/api/city/city_update_local_path', {
                img_base64: ev.target.result,
                code: wiki_code
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
            <h1 className="text-blue-500 text-2xl text-center font-bold m-2"><i className="fas fa-city"></i> Ville : { city_name }</h1>
            <SearchImages cityName={city_name} wikicode={wiki_code}/>
            <div className="flex flex-col items-center mb-8">
                <label className="text-blue-500 text-2xl text-center font-bold "><i className="fas fa-file-upload"></i> Chercher une image dans mes fichiers</label>
                <input className="m-4" onChange={(event)=> GiveImages(event.target.files)} type="file" id="id-file"/>
                <div id="preview"></div>
            </div>
        </div>
    )
}

export default DetailCity