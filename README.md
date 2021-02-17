# MeetHalfWayUploadImg

Launch project

```bash
git clone https://github.com/Axel-AMGHAR/MeetHalfWayUploadImg.git && cd MeetHalfWayUploadImg && cd back && npm install pm2 && npm install && cd ../front && npm install
```

Sur back et front
```bash
npm start 
```
Pour migrate la bdd 

changer à partir de la ligne 20 de server.js 
commenter sync et démommenter le commentaire 
ça
```js
db.sequelize.sync()
/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});*/
```
en 

```js
//db.sequelize.sync()
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
```
puis remettre comme avant

Lancer dans le navigateur 

/api/init_create

Avoir la photo de la ville 
/api/city_path/:code
