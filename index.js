const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

// importa o pacote 'body-parser' para lidar com requisições HTTP
const bodyParser = require('body-parser');

//configura o 'body-parser' para lidar com requisições codificadas em url-encoded
app.use(bodyParser.urlencoded({extended: false}));

const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

// configura o armazenamento do 'multer'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, 'post_' + file.originalname);
    }
}); 

//configura o 'multer' para lidar com upload de imagens
app.use(multer({storage: storage}).single('image'));

// configura o 'multer' para lidar com upload de imagens
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.static(path.join(__dirname, 'public')));

const connection = require ('./db/connection');

app.use(routes);
app.use((req, res) => {
    res.status(404).send('<h1>Página não encontrada</h1');
});

// sincroniza o banco de dados e inicia o servidor
connection.sync().then(result =>{
    app.listen(3080);
}).catch (error => {
    console.log(error);
});
