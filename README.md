# Documentation MeetHalway Upload image

## Start project

> [Télécharger](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/MH_upload_img.backup) le backup de BDD à la racine du projet 

### Launch project

```bash
git clone https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg.git && cd MeetHalfWayUploadImg && cd back && npm install pm2 && npm i && cd ../front && npm i
```

Sur back et front

```bash
npm start 
```

## Pages

### [Navigation](http://localhost:8081/)

![nav](https://raw.githubusercontent.com/Axel-AMGHAR/MeetHalfWayUploadImg/dev/doc_images/navigation.png)

### [Database connection](http://localhost:8081/log-database) 

![Database connection](https://raw.githubusercontent.com/Axel-AMGHAR/MeetHalfWayUploadImg/dev/doc_images/bdd_connect.png) 

### [List images](http://localhost:8081/cities/list)

![list](https://raw.githubusercontent.com/Axel-AMGHAR/MeetHalfWayUploadImg/dev/doc_images/list_cities.png)

> Search a city

![search city](https://raw.githubusercontent.com/Axel-AMGHAR/MeetHalfWayUploadImg/dev/doc_images/search_city.png)

### [Detail city](http://localhost:8081/cities/detail/Q191396/Agde)

> current images for wikimedia, unsplash and local : the photo with yellow border  is the current photo:star: 

![current](https://raw.githubusercontent.com/Axel-AMGHAR/MeetHalfWayUploadImg/dev/doc_images/detail_chosen_img.png)

> Unsplash upload

![unsplash](https://raw.githubusercontent.com/Axel-AMGHAR/MeetHalfWayUploadImg/dev/doc_images/detail_unsplash.png) 

> local upload

![local](https://raw.githubusercontent.com/Axel-AMGHAR/MeetHalfWayUploadImg/dev/doc_images/detail_upload_local.png)

## Back-end

### Routes

> See postman doc : [Routes de l'api](https://documenter.getpostman.com/view/9849951/TWDUqJXN)

### [Controllers](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/tree/dev/back/app/controllers)

#### [City](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/back/app/controllers/city.controller.js)

- redirect to city services

#### [Config](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/back/app/controllers/config.controller.js)

- method : is authenticated
- method : new authentication (send credentials) to create a new sequelize instance
- method : logout

### [Services](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/tree/dev/back/app/services)

#### [City](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/back/app/services/city.service.js)

- create cities path for unsplash or local
- get all paths of images

#### [Config](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/back/app/services/config.service.js)

- update sequelize new instance

### [Models](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/tree/main/back/app/models)

Migrations

- [city](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/back/app/models/city.model.js) 
- [city_path](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/back/app/models/city_path.model.js)

And there is the [db](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/back/app/models/db.js) file

- authentication method
- is authenticated method

## Front-end

### [App.js](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/front/src/App.js)

> where the routes of the app are defined

### [List cities](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/front/src/components/ListCities.js)

### [Detail City](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/front/src/components/DetailCity.js)

- [Search images](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/front/src/components/dlImage/SearchImages.jsx)
  - [Img grid](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/front/src/components/dlImage/ImageGrid.jsx)

### [Database log](https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg/blob/dev/front/src/components/DatabaseLog.js)

