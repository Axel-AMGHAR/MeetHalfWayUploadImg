# MeetHalfWayUploadImg

### Launch project

```bash
git clone https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg.git && cd MeetHalfWayUploadImg && cd back && npm install pm2 && npm install && cd ../front && npm install
```

Sur back et front
```bash
npm start 
```
Pour migrate la bdd

ligne 20 de server.js décommenter force true

```js
db.sequelize.sync(/*{ force: true }*/)
```

```js
db.sequelize.sync({ force: true })
```
puis remettre comme avant

### API

[Routes de l'api](https://documenter.getpostman.com/view/9849951/TWDUqJXN)
